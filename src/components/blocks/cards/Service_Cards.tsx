'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type CardType = {
    id: string;
    img: string;
    title: string;
    subtitle: string;
    bgColor: string;
    link: string;
};

export default function StackedCardsComponent() {
    const panelStackRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const menuItemsRef = useRef<(HTMLSpanElement | null)[]>([]);
    const menuRef = useRef<HTMLDivElement>(null);
    const [menuHeight, setMenuHeight] = useState(0);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

    const cards = [
        {
            id: 'b',
            img: "/img/fork-lift.jpg",
            title: "Compressed Air Solutions",
            subtitle: "Specializing in material handling solutions with quality, safety, and value.",
            bgColor: "#B3D8A8",
            link: "#",
        },
        {
            id: 'c',
            img: "/img/car-parking.jpg",
            title: "Material Handling Equipment",
            subtitle: "Advanced farming solutions for a sustainable future",
            bgColor: "#FFD95F",
            link: "#",
        },
        {
            id: 'd',
            img: "/img/auto-mobile-equipment.jpg",
            title: "Automobile Maintenance Equipment",
            subtitle: "Specializing in material handling solutions with quality, safety, and value.",
            bgColor: "#A6F1E0",
            link: "#",
        },
        {
            id: 'e',
            img: "/img/car-parking.jpg",
            title: "Car Parking Solutions",
            subtitle: "Advanced farming solutions for a sustainable future",
            bgColor: "#FFB4A2",
            link: "#",
        },
        {
            id: 'f',
            img: "/img/fork-lift.jpg",
            title: "Elevators & Escalators",
            subtitle: "Specializing in material handling solutions with quality, safety, and value.",
            bgColor: "#6A80B9",
            link: "#",
        },
        {
            id: 'g',
            img: "/img/auto-mobile-equipment.jpg",
            title: "Welding Products",
            subtitle: "Advanced farming solutions for a sustainable future",
            bgColor: "#BED7DC",
            link: "#",
        },
        {
            id: 'h',
            img: "/img/fork-lift.jpg",
            title: "After Care & Rental",
            subtitle: "Specializing in material handling solutions with quality, safety, and value.",
            bgColor: "#9a93f4",
            link: "#",
        },
        {
            id: 'i',
            img: "/img/auto-mobile-equipment.jpg",
            title: "Solar Systems",
            subtitle: "Advanced farming solutions for a sustainable future",
            bgColor: "#FAF2D3",
            link: "#",
        },
    ];

    // Initialize ref arrays
    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, cards.length);
        menuItemsRef.current = menuItemsRef.current.slice(0, cards.length);
    }, [cards]);

    useEffect(() => {
        const updateMenuHeight = () => {
            if (menuRef.current) {
                const height = menuRef.current.offsetHeight;
                setMenuHeight(height);
            }
        };

        updateMenuHeight();
        const resizeObserver = new ResizeObserver(updateMenuHeight);
        if (menuRef.current) {
            resizeObserver.observe(menuRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const scrollToSection = (targetId: string) => {
        const targetIndex = cards.findIndex(card => card.id === targetId);
        if (targetIndex === -1 || !timelineRef.current) return;

        // Calculate the progress (0 to 1) based on card index
        const progress = targetIndex / (cards.length - 1);

        // Animate the timeline to this position
        gsap.to(timelineRef.current, {
            duration: 0.8,
            progress: progress,
            ease: "power2.out",
            onUpdate: () => {
                if (scrollTriggerRef.current) {
                    scrollTriggerRef.current.scroll(scrollTriggerRef.current.start);
                }
            },
            onComplete: () => {
                menuItemsRef.current.forEach((item, index) => {
                    if (item) {
                        item.style.borderBottom = index === targetIndex
                            ? "1px solid #667085"
                            : "1px solid transparent";
                    }
                });
            }
        });
    };

    useEffect(() => {
        if (menuHeight === 0) return;

        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

        const sm = gsap.matchMedia();

        sm.add("(min-width: 320px)", () => {
            const cardsElements = cardsRef.current.filter(Boolean) as HTMLDivElement[];
            const menuItems = menuItemsRef.current.filter(Boolean) as HTMLSpanElement[];

            if (cardsElements.length === 0 || menuItems.length === 0) return;

            const totalDuration = 500 * cardsElements.length;

            gsap.set(menuItems[0], { borderBottom: "1px solid #667085" });

            gsap.set(panelStackRef.current, {
                height: () => {
                    const offset = 20;
                    const firstCardHeight = cardsElements[0].offsetHeight;
                    return firstCardHeight + (cardsElements.length * offset);
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".panel",
                    fastScrollEnd: true,
                    pin: true,
                    start: `top ${menuHeight + 50}px`,
                    end: `+=${totalDuration}`,
                    pinSpacing: true,
                    scrub: 0.2,
                    markers: false,
                    id: "panel-timeline",
                    onUpdate: (self) => {
                        const activeIndex = Math.floor(self.progress * (cards.length - 1));
                        menuItemsRef.current.forEach((item, index) => {
                            if (item) {
                                item.style.borderBottom = index === activeIndex
                                    ? "1px solid #667085"
                                    : "1px solid transparent";
                            }
                        });
                    }
                }
            });

            timelineRef.current = tl;
            scrollTriggerRef.current = ScrollTrigger.getById("panel-timeline") || null;

            cardsElements.forEach((card, index) => {
                const label = cards[index].id;
                const prevLabels = cards.slice(0, index).map(card => card.id);

                if (index > 0) {
                    tl.from(card, { y: () => window.innerHeight }, label);
                }

                tl.to(card, {
                    scale: 1,
                    duration: 0.3
                }, label);

                prevLabels.forEach((prevLabel, prevIndex) => {
                    tl.to(cardsElements[prevIndex], {
                        scale: 1 - (0.05 * (index - prevIndex)),
                        duration: 0.3
                    }, label);
                });
            });

            return () => {
                tl.kill();
                ScrollTrigger.getAll().forEach(instance => instance.kill());
            };
        });

        return () => {
            sm.revert();
        };
    }, [menuHeight, cards]);

    return (
        <section
            className="panel"
            style={{
                paddingTop: `${menuHeight + 50}px`,
                paddingBottom: '7.5rem',
                marginTop: `-${menuHeight}px`
            }}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="panel__options mb-2"
                            ref={menuRef}
                            style={{ position: 'absolute', top: '50px', width: '100%' }}
                        >
                            {cards.map((item, index) => (
                                <span
                                    key={item.id}
                                    id={`menu-item-${item.id}`}
                                    ref={el => { menuItemsRef.current[index] = el }}
                                    data-target={item.id}
                                    style={{ borderBottom: index === 0 ? '1px solid #667085' : '1px solid transparent' }}
                                    role="button"
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.title}
                                </span>
                            ))}
                        </div>

                        <div className="panel__stack" ref={panelStackRef}>
                            {cards.map((card, index) => (
                                <div
                                    key={card.id}
                                    id={card.id}
                                    className={`panel__card panel__card--${index + 1} overflow-hidden`}
                                    ref={el => { cardsRef.current[index] = el }}
                                    style={{ backgroundColor: card.bgColor }}
                                >
                                    <div className="panel__content">
                                        <h2>{card.title}</h2>
                                        <p>{card.subtitle}</p>
                                        <a href={card.link} className="btn btn-black-shadow">
                                            Learn More
                                        </a>
                                    </div>
                                    <div className="panel__image">
                                        <img src={card.img} alt={card.title} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .panel__stack {
                    --spacer: 20px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-height: 600px;
                }

                .panel__card {
                    width: 100%;
                    border-radius: 30px;
                    padding: 2.5rem;
                    position: absolute;
                    height: 35.625rem;
                    will-change: transform;
                    transform: scale(0.85);
                    transform-origin: top;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .panel__stack .panel__card:first-child {
                    top: calc(var(--spacer) * 1);
                    z-index: 1;
                    transform: scale(0.95);
                }
                .panel__stack .panel__card:nth-child(2) {
                    top: calc(var(--spacer) * 2);
                    z-index: 2;
                    transform: scale(0.90);
                }
                .panel__stack .panel__card:nth-child(3) {
                    top: calc(var(--spacer) * 3);
                    z-index: 3;
                    transform: scale(0.85);
                }
                .panel__stack .panel__card:nth-child(4) {
                    top: calc(var(--spacer) * 4);
                    z-index: 4;
                    transform: scale(0.80);
                }
                .panel__stack .panel__card:nth-child(5) {
                    top: calc(var(--spacer) * 5);
                    z-index: 5;
                    transform: scale(0.75);
                }
                .panel__stack .panel__card:nth-child(6) {
                    top: calc(var(--spacer) * 6);
                    z-index: 6;
                    transform: scale(0.70);
                }
                .panel__stack .panel__card:nth-child(7) {
                    top: calc(var(--spacer) * 7);
                    z-index: 7;
                    transform: scale(0.65);
                }
                .panel__stack .panel__card:nth-child(8) {
                    top: calc(var(--spacer) * 8);
                    z-index: 8;
                    transform: scale(0.60);
                }

                .panel__content {
                    width: 48%;
                }
                .panel__image {
                    width: 52%;
                }
                .panel__image img {
                    width: 100%;
                    height: auto;
                    border-radius: 20px;
                }

                .btn-black-shadow {
                    position: relative;
                    z-index: 1;
                    background: #000;
                    color: #fff;
                    padding: 12px 24px;
                    border-radius: 8px;
                    text-decoration: none;
                    display: inline-block;
                    margin-top: 20px;
                }
                .btn-black-shadow::before {
                    content: "";
                    width: 100%;
                    height: 100%;
                    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
                    position: absolute;
                    left: 0;
                    top: 0;
                    border-radius: 8px;
                    transition: box-shadow 0.2s linear;
                    z-index: -1;
                }
                .btn-black-shadow:hover::before {
                    box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.8);
                }

                .panel__options {
                    display: flex;
                    gap: 20px;
                    padding: 0 15px;
                    overflow-x: auto;
                    white-space: nowrap;
                }
                .panel__options span {
                    cursor: pointer;
                    padding-bottom: 5px;
                    transition: border-color 0.2s;
                    border-bottom: 1px solid transparent;
                    display: inline-block;
                    font-size: 16px;
                    font-weight: 500;
                }
                .panel__options span:hover {
                    border-bottom-color: #667085;
                }
                .panel__options span.active {
                    border-bottom-color: #667085;
                }

                @media (max-width: 768px) {
                    .panel__stack .panel__card {
                        height: auto;
                        min-height: 500px;
                        flex-direction: column;
                    }
                    .panel__content, .panel__image {
                        width: 100%;
                    }
                    .panel__image {
                        margin-top: 20px;
                    }
                }
            `}</style>
        </section>
    );
}