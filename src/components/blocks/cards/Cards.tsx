'use client';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';


const CardMotion = () => {
    const container = useRef(null)

    // Card dataset - completely self-contained
    const cards = [
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

    // Scroll animation setup
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    return (
        <div ref={container} className='card'>
            {cards.map((card, i) => {
                // Animation calculations
                const targetScale = 1 - ((cards.length - i - 1) * 0.05)
                const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1])
                const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1])
                const y = useTransform(scrollYProgress, [0, 1], [i * 30, 0])
                const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

                return (
                    <div
                        key={`card-${i}`}
                        className={styles.cardContainer}
                    >
                        <motion.div
                            key={`card-${i}`}
                            className={styles.card}
                            style={{
                                backgroundColor: card.bgColor,
                                scale,
                                top: `calc(-5vh + ${i * 25}px)`
                            }}
                        >
                            <h2>{card.title}</h2>
                            <div className={styles.cardBody}>
                                <div className={styles.description}>
                                    <p>{card.subtitle}</p>
                                    <span>
                                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                                            See more
                                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                                                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>

                                <div className={styles.imageContainer}>
                                    <motion.div
                                        className={styles.imageInner}
                                        style={{ scale: imageScale }}
                                    >
                                        <Image
                                            fill
                                            src={card.img}
                                            alt={card.title}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardMotion 