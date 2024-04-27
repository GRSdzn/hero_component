'use client';
import { useState, useCallback } from 'react';
import s from './hero_slider.module.css';
import Image from 'next/image';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // определение состояния для текущего слайда
  const imgs = ['/assets/image_poster.png', '/assets/image1.jpg', '/assets/image2.jpg']; // список изображений для слайдера

  const handleSlideChange = useCallback(
    (newSlide: number) => {
      setCurrentSlide((currentSlide + newSlide + imgs.length) % imgs.length); // функция для изменения текущего слайда с учетом границ
    },
    [currentSlide, imgs.length]
  ); // оптимизация перерисовок функции

  return (
    <div className={s.hero_slider}>
      {' '}
      {/* контейнер для всего слайдера */}
      <div className={s.slider_container}>
        {' '}
        {/* контейнер для слайдов и кнопок */}
        <button className={`${s.arrow_button} ${s.arrow_button_left}`} onClick={() => handleSlideChange(-1)}>
          &lt; {/* кнопка для перехода к предыдущему слайду */}
        </button>
        <div className={s.hero_images}>
          {/* контейнер для отображения изображений */}
          {[-1, 0, 1].map((indexOffset) => {
            // отображение текущего, предыдущего и следующего изображений
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
          &gt; {/* кнопка для перехода к следующему слайду */}
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
