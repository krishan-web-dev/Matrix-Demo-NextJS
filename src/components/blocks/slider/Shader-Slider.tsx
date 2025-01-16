'use client';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@/plugins/shaders-slider/navigation.scss';

import SwiperGL from '@/plugins/shaders-slider/dist/swiper-gl.esm.js';
import '@/plugins/shaders-slider/dist/swiper-gl.scss';

// Extend SwiperOptions to include the 'gl' property
/*
declare module 'swiper' {
    interface SwiperOptions {
        gl?: {
            shader: string;
        };
    }
}
    */

interface ExtendedSwiperOptions {
    gl?: {
        shader: string;
    };
}

export default function ShaderSlider() {
    return (
        <section className="wrapper" id='ShaderSlider'>
            <Swiper
                modules={[Navigation, Autoplay, SwiperGL]}
                autoplay={{ delay: 5000 }}
                speed={1000}
                loop={true}
                effect="gl"
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.gl = { shader: 'wind' };
                }}
                navigation={{
                    nextEl: '.swiper-nxt',
                    prevEl: '.swiper-prev'
                }}
            >
                <SwiperSlide>
                    <img src="/img/01.jpg" alt="slider" className="swiper-gl-image w-100" />
                    <div className="swiper-slide-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2"></div>
                                <div className="col-lg-6 content__block">
                                    <h2 className="display-4 mb-3"><span className="underline-3 style-3 green">Who Are We?</span></h2>
                                    <p className="lead fs-lg">
                                        We are a digital and branding company that believes in the power of creative strategy and along with great
                                        design.
                                    </p>
                                    <p className="lead fs-lg">
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/02.jpg" alt="slider" className="swiper-gl-image w-100" />
                    <div className="swiper-slide-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2"></div>
                                <div className="col-lg-6 content__block">
                                    <h2 className="display-4 mb-3">Who Are We?</h2>
                                    <p className="lead fs-lg">
                                        We are a digital and branding company that believes in the power of creative strategy and along with great
                                        design.
                                    </p>
                                    <p className="lead fs-lg">
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/03.jpg" alt="slider" className="swiper-gl-image w-100" />
                    <div className="swiper-slide-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2"></div>
                                <div className="col-lg-6 content__block">
                                    <h2 className="display-4 mb-3">Who Are We?</h2>
                                    <p className="lead fs-lg">
                                        We are a digital and branding company that believes in the power of creative strategy and along with great
                                        design.
                                    </p>
                                    <p className="lead fs-lg">
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="swiper-navigation">
                    <div className="swiper-nav swiper-nxt"></div>
                    <div className="swiper-nav swiper-prev"></div>
                </div>
            </Swiper>
        </section >
    );
}