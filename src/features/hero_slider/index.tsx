'use client';
import React, { useState, useCallback } from 'react';
import s from './hero_slider.module.css';
import Image from 'next/image';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imgs = ['/assets/image_poster.png', '/assets/image1.jpg', '/assets/image2.jpg'];

  const handleSlideChange = useCallback(
    (newSlide: number) => {
      setCurrentSlide((currentSlide + newSlide + imgs.length) % imgs.length);
    },
    [currentSlide, imgs.length]
  );

  return (
    <div className={s.hero_slider}>
      <div className={s.slider_container}>
        <button className={`${s.arrow_button} ${s.arrow_button_left}`} onClick={() => handleSlideChange(-1)}>
          &lt;
        </button>
        <div className={s.hero_images}>
          {[-1, 0, 1].map((indexOffset) => {
            const index = (currentSlide + indexOffset + imgs.length) % imgs.length;
            const zIndex = indexOffset === 0 ? 2 : 1;
            const imageClass = indexOffset === 0 ? 'center' : indexOffset < 0 ? 'left' : 'right';
            return (
              <div key={index} onClick={() => handleSlideChange(index - currentSlide)} className={`${s.hero_image_content} ${s[`hero_img_${imageClass}`]}`} style={{ zIndex, position: 'relative' }}>
                <Image
                  loading="lazy"
                  blurDataURL="data:image/png;base64,exampleBase64StringForBlurredImage"
                  src={imgs[index]}
                  alt={`Image ${index + 1}`}
                  style={{ objectFit: 'cover' }}
                  className={`${s.slider_image} ${s[`image_${imageClass}`]}`}
                  fill
                  sizes="100%"
                />
              </div>
            );
          })}
        </div>
        <button className={`${s.arrow_button} ${s.arrow_button_right}`} onClick={() => handleSlideChange(1)}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
