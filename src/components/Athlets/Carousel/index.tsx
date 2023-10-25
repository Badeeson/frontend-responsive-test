import React, { useState } from 'react';
import { Carousel } from 'antd';
import ContentSection, { ContentSectionProps } from '../ContentSection';

interface CarouselCustomProps {
  data: Array<ContentSectionProps>;
  type: string;
}

const CarouselCustom = (props: CarouselCustomProps) => {
  const { data, type } = props;
  const [contentActive, setContentActive] = useState(false);

  const onChange = (currentSlide: number) => {
    if (currentSlide === 2) setContentActive(true);
    else setContentActive(false);
  };

  return (
    <Carousel
      className={`carousel-container ${contentActive ? (type === 'football' ? 'carousel-content-football-active' : 'carousel-content-basketball-active') : ''}`}
      afterChange={onChange}
      dots={{ className: `carousel-dots-circle ${contentActive ? 'carousel-dots-circle-active' : ''}` }}
    >
      {data.map((item) => {
        return (
          <ContentSection
            {...item}
            type={type}
            key={type + item.sequence}
          />
        );
      })}
    </Carousel>
  );
}

export default CarouselCustom;