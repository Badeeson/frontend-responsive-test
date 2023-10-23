import React, { useState } from 'react';
import { Carousel } from 'antd';
import { Typography } from 'antd';
import '../index.css';

const { Title, Paragraph } = Typography;

interface carouselContentProps {
  sequence: string;
  label: string;
  content: string;
  type?: string;
}

const CarouselContent = (props: carouselContentProps) => {
  const { sequence, label, content, type } = props;
  return (
    <Typography>
      <Title
        level={2}
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#C2C2C2',
          fontWeight: 400
        }}
      >
        <span
          style={{
            color: type === 'basketball' ? '#8F6BE8' : '#000000',
            fontSize: '0.5em',
            textDecoration: 'underline',
            textDecorationThickness: 4,
            textDecorationColor: sequence === '03' ? '#C2C2C2' : '#603EBE',
            marginRight: 12
          }}
        >
          {sequence}
        </span>
        {label}
      </Title>
      <Paragraph style={{ color: sequence === '03' ? '#FFFFFF' : '#000000' }}>
        {content}
      </Paragraph>
    </Typography>
  );
}

interface CarouselCustomProps {
  data: Array<carouselContentProps>;
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
      dots={{ className: `carousel-dots-circle ${contentActive ? 'carousel--active' : ''}` }}
    >
      {data.map((item) => {
        return (
          <CarouselContent
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