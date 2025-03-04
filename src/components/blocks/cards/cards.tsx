"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./cards.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
    // Explicitly define ref types
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;
        const items = wrapper?.querySelectorAll<HTMLDivElement>(".item");

        if (!section || !items || items.length === 0) return;

        // Initial states
        items.forEach((item, index) => {
            if (index !== 0) {
                gsap.set(item, { yPercent: 100 });
            }
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                pin: true,
                start: "top top",
                end: () => `+=${items.length * 100}%`,
                scrub: 1,
                invalidateOnRefresh: true,
            },
            defaults: { ease: "none" },
        });

        items.forEach((item, index) => {
            timeline.to(item, {
                scale: 0.9,
                borderRadius: "10px",
            });

            if (items[index + 1]) {
                timeline.to(items[index + 1], { yPercent: 0 }, "<");
            }
        });

        return () => {
            timeline.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div ref={sectionRef} className="scroll-section vertical-section section cards">
            <div ref={wrapperRef} className="wrapper">
                <div role="list" className="list">
                    {data.map((item, index) => (
                        <div key={index} role="listitem" className="item">
                            <div className="item_content">
                                <h2 className="item_number">{index + 1}</h2>
                                <h2>{item.title}</h2>
                                <p className="item_p">{item.description}</p>
                            </div>
                            <video src={item.video} autoPlay muted loop className="item_media"></video>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Sample Data
const data = [
    {
        title: "Wildlife in Action: A Glimpse into Nature’s Daily Drama",
        description:
            "Witness the fascinating lives of animals in their natural habitats, from playful cubs to stealthy predators.",
        video: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
    },
    {
        title: "The Changing Seasons: Nature’s Everlasting Cycle",
        description:
            "Experience the beauty of nature's transitions, from blooming spring flowers to snowy winter landscapes.",
        video: "https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4",
    },
    {
        title: "Guardians of Nature: Protecting Our Planet’s Future",
        description:
            "Learn about the importance of conservation and how we can work together to preserve the beauty of nature for generations to come.",
        video: "https://videos.pexels.com/video-files/4328514/4328514-uhd_2560_1440_30fps.mp4",
    },
    {
        title: "Astral Aesthetics: Portraits from the Infinite",
        description:
            "Experience the boundless beauty of the cosmos through striking portraits that capture its infinite aesthetic appeal.",
        video: "https://videos.pexels.com/video-files/2871916/2871916-hd_1920_1080_30fps.mp4",
    },
];
