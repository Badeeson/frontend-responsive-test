import React from 'react';
import Image from 'next/image';
import { theme } from 'antd';
import { ContentSectionProps } from '@/common/interfaces';
import GridArrange from './GridArrange';
import ContentSection from './ContentSection';
import { footballerData, basketballerData } from './data';
import './index.css';

const renderContents = (data: ContentSectionProps[], type: string) => {
  return data.map((item) => (
    <ContentSection
      {...item}
      type={type}
      key={type + item.sequence}
    />
  ));
};

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
        content={renderContents(footballerData, 'football')}
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
        content={renderContents(basketballerData, 'basketball')}
      />
    </div>
  );
};

export default AthletsComponent;