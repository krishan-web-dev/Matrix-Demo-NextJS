'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import 'swiper/css';
import './scroll_cards.scss';

export default function Scroll_Cards() {
    const [isCarouselEnabled, setIsCarouselEnabled] = useState(false);

    // Dynamically check screen size
    useEffect(() => {
        console.log('Current screen width:', window.innerWidth);
        const handleResize = () => {
            setIsCarouselEnabled(window.innerWidth <= 1200); // Enable Swiper below 768px
        };

        handleResize(); // Run on component mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cards = [
        {
            img: '/img/fork-lift.jpg',
            title: 'Material Handling Equipment',
            subtitle: 'Specializing in material handling solutions with quality, safety, and value.',
            link: 'http://www.dimolanka.com/our-sectors/agriculture/',
        },
        {
            img: 'https://www.dimolanka.com/wp-content/uploads/2023/03/Agriculture-800x800-.jpg',
            title: 'Agriculture',
            subtitle: 'Advanced farming solutions for a sustainable future',
            link: 'http://www.dimolanka.com/our-sectors/agriculture/',
        },
        {
            img: '/img/fork-lift.jpg',
            title: 'Material Handling Equipment',
            subtitle: 'Specializing in material handling solutions with quality, safety, and value.',
            link: 'http://www.dimolanka.com/our-sectors/agriculture/',
        },
        {
            img: 'https://www.dimolanka.com/wp-content/uploads/2023/03/Agriculture-800x800-.jpg',
            title: 'Agriculture',
            subtitle: 'Advanced farming solutions for a sustainable future',
            link: 'http://www.dimolanka.com/our-sectors/agriculture/',
        },
        {
            img: '/img/fork-lift.jpg',
            title: 'Material Handling Equipment',
            subtitle: 'Specializing in material handling solutions with quality, safety, and value.',
            link: 'http://www.dimolanka.com/our-sectors/agriculture/',
        },
        {
            img: 'https://www.dimolanka.com/wp-content/uploads/2023/03/Agriculture-800x800-.jpg',
            title: 'Agriculture',
            subtitle: 'Advanced farming solutions for a sustainable future',
            link: 'http://www.dimolanka.com/our-sectors/agriculture/',
        },
        // Add more card data as needed
    ];

    return (
        <section className="wrapper bg-light hm-discover">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {/* Scroll Card */}
                        {isCarouselEnabled ? (
                            <div className="discover-list hm-discover-carousel grid">
                                <Swiper
                                    slidesPerView={1}
                                    modules={[Navigation]}
                                    //pagination={{ clickable: true }}
                                    spaceBetween={15}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 15,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                            spaceBetween: 12,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 15,
                                        },
                                    }}
                                    navigation={{
                                        nextEl: '.scroll__card_nav .swiper-nxt',
                                        prevEl: '.scroll__card_nav .swiper-prev'
                                    }}
                                >
                                    <div className="scroll__card_nav">
                                        <div className="swiper-nav swiper-prev">
                                            <i className="uil uil-angle-left-b"></i>
                                        </div>
                                        <div className="swiper-nav swiper-nxt">
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </div>
                                    {cards.map((card, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="single-item box">
                                                <a href={card.link} target="_blank" rel="noopener noreferrer">
                                                    <div className="abs-img">
                                                        <img src={card.img} alt={card.title} />
                                                    </div>
                                                    <div className="title-wrapper">
                                                        <span className="title">{card.title}</span>
                                                        <span className="sub-title">{card.subtitle}</span>
                                                        <span className="link-btn">
                                                            <div className="long-arrow-right"></div>
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ) : (
                            <div className="discover-list hm-discover-carousel grid">
                                {cards.map((card, index) => (
                                    <div className="single-item box" key={index}>
                                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                                            <div className="abs-img">
                                                <img src={card.img} alt={card.title} />
                                            </div>
                                            <div className="title-wrapper">
                                                <span className="title">{card.title}</span>
                                                <span className="sub-title">{card.subtitle}</span>
                                                <span className="link-btn">
                                                    <div className="long-arrow-right"></div>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* Scroll Card End */}
                    </div>
                </div>
            </div>
        </section>
    );
}