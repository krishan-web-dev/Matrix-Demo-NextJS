'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

interface PanelCard {
    img: string
    title: string
    subtitle: string
    bgColor: string
    link: string
}

const PanelComponent = () => {
    const panelRef = useRef<HTMLDivElement>(null)
    const stackRef = useRef<HTMLDivElement>(null)
    const optionsRef = useRef<HTMLDivElement>(null)

    // Your provided dataset
    const cards: PanelCard[] = [
        {
            img: "/img/fork-lift.jpg",
            title: "Compressed Air Solutions",
            subtitle: "Specializing in material handling solutions with quality, safety, and value.",
            bgColor: "#B3D8A8",
            link: "#",
        },
        {
            img: "/img/car-parking.jpg",
            title: "Material Handling Equipment",
            subtitle: "Advanced farming solutions for a sustainable future",
            bgColor: "#FFD95F",
            link: "#",
        },
        {
            img: "/img/auto-mobile-equipment.jpg",
            title: "Automobile Maintenance Equipment",
            subtitle: "Specializing in material handling solutions with quality, safety, and value.",
            bgColor: "#A6F1E0",
            link: "#",
        },
        {
            img: "/img/car-parking.jpg",
            title: "Car Parking Solutions",
            subtitle: "Advanced farming solutions for a sustainable future",
            bgColor: "#FFB4A2",
            link: "#",
        },
        {
            img: "/img/fork-lift.jpg",
            title: "Elevators & Escalators",
            subtitle: "Specializing in material handling solutions with quality, safety, and value.",
            bgColor: "#6A80B9",
            link: "#",
        },
        {
            img: "/img/auto-mobile-equipment.jpg",
            title: "Welding Products",
            subtitle: "Advanced farming solutions for a sustainable future",
            bgColor: "#BED7DC",
            link: "#",
        },
        {
            img: "/img/fork-lift.jpg",
            title: "After Care & Rental",
            subtitle: "Specializing in material handling solutions with quality, safety, and value.",
            bgColor: "#9a93f4",
            link: "#",
        },
        {
            img: "/img/auto-mobile-equipment.jpg",
            title: "Solar Systems",
            subtitle: "Advanced farming solutions for a sustainable future",
            bgColor: "#FAF2D3",
            link: "#",
        },
    ]

    // Create targets for GSAP (b, c, d, e, etc.)
    const cardTargets = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].slice(0, cards.length)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const sm = gsap.matchMedia()

        sm.add('(min-width: 1130px)', () => {
            const images = gsap.utils.toArray('.panel__card')
            const endTime = 500 * images.length

            gsap.set(stackRef.current, {
                height: () => {
                    const offset = 20
                    const cards = document.querySelectorAll('.panel__card')
                    const height = cards[0]?.clientHeight || 0
                    return height + cards.length * offset
                },
            })

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panelRef.current,
                    fastScrollEnd: true,
                    pin: true,
                    start: '50% 370px',
                    end: `+=${endTime}px`,
                    pinSpacing: true,
                    scrub: 0.2,
                    markers: false,
                },
            })

            // Setup initial active tab
            tl.set('.panel__options > span:nth-child(1)', {
                borderBottom: '1px solid #667085',
            })

            // Create animations for each card
            cards.forEach((_, index) => {
                const target = cardTargets[index]
                const prevTarget = index > 0 ? cardTargets[index - 1] : null

                if (index > 0) {
                    // For cards after the first one
                    tl.set(`.panel__options > span:nth-child(${index})`, {
                        borderBottom: '1px solid transparent',
                    })

                    tl.set(`.panel__options > span:nth-child(${index + 1})`, {
                        borderBottom: '1px solid #667085',
                    })

                    tl.from(`.panel__card:nth-child(${index + 1})`, {
                        y: () => window.innerHeight
                    })
                }

                // Scale down previous cards
                for (let i = 0; i < index; i++) {
                    tl.to(
                        `.panel__card:nth-child(${i + 1})`,
                        {
                            scale: 1 - (0.05 * (index - i + 1)),
                            duration: 0.3,
                            transformOrigin: 'top'
                        },
                        target
                    )
                }

                // Current card animation
                if (index > 0) {
                    tl.to(
                        `.panel__card:nth-child(${index + 1})`,
                        {
                            scale: 0.95,
                            duration: 0.3,
                            transformOrigin: 'top'
                        },
                        target
                    )
                }
            })

            function gotSeek(id: string) {
                gsap.to(window, {
                    duration: 0.3,
                    scrollTo: { y: tl.scrollTrigger?.labelToScroll(id) + 10 },
                    ease: 'power2.out',
                })
                tl.tweenTo(id, {
                    duration: 0.3,
                    onComplete: function () { },
                    ease: 'power2.out',
                })
            }

            const links = gsap.utils.toArray('.panel__options span')

            links.forEach((link: any) => {
                link.addEventListener('click', () => {
                    gotSeek(link.dataset.target)
                })
            })

            return () => {
                links.forEach((link: any) => {
                    link.removeEventListener('click', () => {
                        gotSeek(link.dataset.target)
                    })
                })
                tl.kill()
                sm.revert()
            }
        })
    }, [])

    return (
        <section className="panel py-5 py-lg-7" ref={panelRef}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel__options mb-2" ref={optionsRef}>
                            {cards.map((card, index) => (
                                <span
                                    key={index}
                                    data-target={cardTargets[index]}
                                    className={index === 0 ? 'active' : ''}
                                    role="button"
                                >
                                    {card.title}
                                </span>
                            ))}
                        </div>

                        <div className="panel__stack" ref={stackRef}>
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`panel__card rounded-4 p-4 position-absolute`}
                                    style={{
                                        backgroundColor: card.bgColor,
                                        height: '570px'
                                    }}
                                >
                                    <div className="row h-100 align-items-center">
                                        <div className="col-md-6 d-flex flex-column">
                                            <h3 className="fw-bold mb-3" style={{ fontSize: '2.125rem' }}>{card.title}</h3>
                                            <p className="mb-4">{card.subtitle}</p>
                                            <a
                                                href={card.link}
                                                className="btn btn-light text-dark fw-semibold align-self-start mt-4 position-relative"
                                                style={{
                                                    padding: '0.625rem 1.875rem',
                                                    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.8)',
                                                    transition: 'box-shadow 0.2s linear'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.boxShadow = '6px 6px 0px rgba(0, 0, 0, 0.8)'
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.8)'
                                                }}
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                        <div className="col-md-6 text-end">
                                            <picture>
                                                <img
                                                    src={card.img}
                                                    alt={card.title}
                                                    className="img-fluid"
                                                    style={{ maxHeight: '480px' }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .panel__options {
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
        }

        .panel__options span {
          font-size: 14px;
          cursor: pointer;
          padding-bottom: 5px;
          border-bottom: 1px solid transparent;
          white-space: nowrap;
        }
        .panel__options span.active {
          border-bottom: 1px solid #667085;
        }
        .panel__options span:hover {
          color: inherit;
          opacity: 0.8;
        }

        .panel__stack {
          --spacer: 20px;
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          align-items: center;
          justify-items: center;
          overflow-y: visible;
        }

        .panel__card {
          width: 100%;
          will-change: transform;
          top: calc(var(--spacer) * var(--card-index));
          z-index: var(--card-index);
        }

        ${cards.map((_, index) => `
          .panel__card:nth-child(${index + 1}) {
            --card-index: ${index + 1};
          }
        `).join('')}
      `}</style>
        </section>
    )
}

export default PanelComponent