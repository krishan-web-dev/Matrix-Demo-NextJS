'use client';

import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function PhotoSwipeWrapper({
  galleryID = 'gallery-pswp',
  children,
}: {
  galleryID: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  let scrollY = 0;

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = null;

    if (containerRef.current) {
      lightbox = new PhotoSwipeLightbox({
        gallery: `#${galleryID}`,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });

      lightbox.on('beforeOpen', () => {
        scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'scroll';  // Preserve scrollbar
      });

      lightbox.on('close', () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollY);
      });

      lightbox.init();
    }

    return () => {
      lightbox?.destroy();
    };
  }, [galleryID]);

  return (
    <div id={galleryID} ref={containerRef}>
      {children}
    </div>
  );
}
