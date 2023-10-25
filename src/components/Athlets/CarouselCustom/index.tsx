import React, { useState } from 'react';
import { Carousel } from 'antd';
import { CarouselCustomProps } from '@/common/interfaces';

const CarouselCustom = (props: CarouselCustomProps) => {
  const { type, children } = props;
  const [contentActive, setContentActive] = useState(false);

  const onChange = (currentSlide: number) => {
    if (currentSlide === 2) setContentActive(true);
    else setContentActive(false);
  };

  return (
    <Carousel
      className={`carousel-container ${contentActive ? (type === 'football' ? 'carousel-content-football-footer' : 'carousel-content-basketball-footer') : ''}`}
      afterChange={onChange}
      dots={{ className: `carousel-dots-circle ${contentActive ? 'carousel-dots-circle-active' : ''}` }}
    >
      {children}
    </Carousel>
  );
}

export default CarouselCustom;