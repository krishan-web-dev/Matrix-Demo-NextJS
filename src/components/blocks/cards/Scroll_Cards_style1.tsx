'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import NextLink from "@/components/reuseable/links/NextLink";


import 'swiper/css';
//import './scroll_cards.scss';
import './scroll_style1.scss';

export default function Scroll_Cards1() {
    const [isCarouselEnabled, setIsCarouselEnabled] = useState(false);

    // Dynamically check screen size
    useEffect(() => {
        //console.log('Current screen width:', window.innerWidth);
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
            title: 'Compressed Air Solutions',
            subtitle: 'Specializing in material handling solutions with quality, safety, and value.',
            link: '#',
        },
        {
            img: '/img/car-parking.jpg',
            title: 'Material Handling Equipement',
            subtitle: 'Advanced farming solutions for a sustainable future',
            link: '#',
        },
        {
            img: '/img/auto-mobile-equipment.jpg',
            title: 'Automobile Maintenance Equipment',
            subtitle: 'Specializing in material handling solutions with quality, safety, and value.',
            link: '#',
        },
        {
            img: '/img/car-parking.jpg',
            title: 'Car Parking Solutions',
            subtitle: 'Advanced farming solutions for a sustainable future',
            link: '#',
        },
        {
            img: '/img/fork-lift.jpg',
            title: 'Elevators & Escalators',
            subtitle: 'Specializing in material handling solutions with quality, safety, and value.',
            link: '#',
        },
        {
            img: '/img/auto-mobile-equipment.jpg',
            title: 'Welding Products',
            subtitle: 'Advanced farming solutions for a sustainable future',
            link: '#',
        },
        {
            img: '/img/fork-lift.jpg',
            title: 'After Care & Rental',
            subtitle: 'Specializing in material handling solutions with quality, safety, and value.',
            link: '#',
        },
        {
            img: '/img/auto-mobile-equipment.jpg',
            title: 'Solar Systems',
            subtitle: 'Advanced farming solutions for a sustainable future',
            link: '#',
        },
        // Add more card data as needed
    ];

    return (
        <section className="wrapper bg-light hm-discover">
            <div className="container-fluid">
                <div className='row justify-content-md-center'>
                    <div className="col-md-6 mt-16 mt-md-18 mb-10 mb-md-12 text-center">
                        <h3 className="display-2 ls-xs mb-8">
                            We bring <span className="underline-3 style-2 br-yellow">solutions</span> to make life easier for our customers.
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-10 mb-md-12">
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
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ) : (
                            <div className="discover-list hm-discover-carousel grid style-1 cards__scroll">
                                {cards.map((card, index) => (
                                    <figure className="overlay caption caption-overlay rounded-md single__card" key={index}>
                                        <Link href="#">
                                            <Image src={card.img} alt={card.title} width={600} height={600} />
                                            <span className="bg" />
                                        </Link>

                                        <figcaption>
                                            <h2 className="post-title h3 mt-1 mb-3">
                                                <NextLink title={card.title} href="#" />
                                            </h2>
                                            <span className="sub-title">{card.subtitle}</span>
                                        </figcaption>
                                        <div className="BlogTile_Button__SAl_F">
                                            <div className="Button_Button__vVAZK" title="Click here">
                                                <span>
                                                    <div className="Button_ArrowCont__WrhN_">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                            <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path></svg>
                                                        <div className="Button_Arrow__LawjV">
                                                            <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.857198 13.7372L27.9141 13.7372" stroke="black" strokeWidth="3"></path>
                                                                <path d="M15.4561 1.39417L27.9142 13.8522L15.4561 26.3104" stroke="black" strokeWidth="3"></path>
                                                            </svg>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                            <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </figure>
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