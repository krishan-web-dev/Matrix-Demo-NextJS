'use client';

import { Fragment, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import 'swiper/css';
import './product-slider.scss';

interface SlideImage {
  id: number;
  url: string;
  fullImage: string;
  width: number;
  height: number;
}

interface ProductSliderProps {
  galleryID: string;
}

export default function ProductSlider({ galleryID }: ProductSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const slideImages: SlideImage[] = [
    { 
      id: 1, 
      url: '/img/products/1-1.jpg', 
      fullImage: '/img/products/1-1.jpg', 
      width: 1200, 
      height: 800 
    },
    // Add your other images...
  ];

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    lightboxRef.current = new PhotoSwipeLightbox({
      gallery: `#${galleryID}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      showHideAnimationType: 'fade',
      bgOpacity: 0.9,
    });

    // Add this important event listener
    lightboxRef.current.on('uiRegister', () => {
      lightboxRef.current?.pswp?.ui.registerElement({
        name: 'download-button',
        order: 8,
        isButton: true,
        tagName: 'a',
        html: 'Download',
        onInit: (el, pswp) => {
          el.setAttribute('download', '');
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener');
          
          pswp.on('change', () => {
            const currSlide = pswp.currSlide;
            if (currSlide) {
              el.href = currSlide.data.src;
            }
          });
        }
      });
    });

    lightboxRef.current.init();

    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, [galleryID, isMounted]);

  return (
    <Fragment>
      {/* Main Slider */}
      <div className="mb-3" id={galleryID}>
        <Swiper
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="product-slider-main"
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <a
                href={slide.fullImage}
                data-pswp-width={slide.width}
                data-pswp-height={slide.height}
                data-pswp-src={slide.fullImage}  // This is crucial!
                onClick={(e) => e.preventDefault()}
              >
                <div className="ratio ratio-1x1 cursor-zoom-in">
                  <Image
                    src={slide.url}
                    alt={`Product image ${slide.id}`}
                    fill
                    className="object-fit-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Slider */}
      <div className="thumbnail-slider-container">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="product-slider-thumbs"
        >
          {slideImages.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="ratio ratio-1x1 cursor-pointer">
                <Image
                  width={114}
                  height={120}
                  src={slide.url}
                  alt={`Thumbnail ${slide.id}`}
                  className="object-fit-cover w-100 h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
}