import React from 'react';
import Image from 'next/image';
import { theme } from 'antd';
import CarouselCustom from './CarouselCustom';
import RenderContent from './RenderContent';
import { footballerData, basketballerData } from './data';
import './index.css';

const AthletsComponent: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
      <RenderContent
        title="ATHLETS"
        img={<Image
          src="/graphic-mobile-footballer.png"
          alt="Footballer"
          priority
          // className={styles.vercelLogo}
          width={218}
          height={281}
        />}
        content={<CarouselCustom data={footballerData} type="football" />}
      />
      <RenderContent
        title="PLAYERS"
        img={<Image
          src="/graphic-mobile-basketballer.png"
          alt="Basketballer"
          priority
          width={302}
          height={250}
        />}
        content={<CarouselCustom data={basketballerData} type="basketball" />}
      />
    </div>
  );
};

export default AthletsComponent;
