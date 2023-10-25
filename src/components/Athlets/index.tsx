import React from 'react';
import Image from 'next/image';
import { theme } from 'antd';
import { ContentSectionProps } from '@/common/interfaces';
import { FOOTBALL, BASKETBALL } from '@/common/constants';
import GridArrange from './GridArrange';
import ContentSection from './ContentSection';
import { footballerData, basketballerData } from './data';
import './index.css';

const AthletsComponent: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
      <GridArrange
        title="ATHLETS"
        img={<Image
          src="/graphic-mobile-footballer.png"
          alt="Footballer"
          priority
          width={218}
          height={281}
        />}
        type={FOOTBALL}
        contentData={footballerData}
      />
      <GridArrange
        title="PLAYERS"
        img={<Image
          src="/graphic-mobile-basketballer.png"
          alt="Basketballer"
          priority
          width={302}
          height={250}
        />}
        type={BASKETBALL}
        contentData={basketballerData}
      />
    </div>
  );
};

export default AthletsComponent;