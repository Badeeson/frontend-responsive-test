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
        img="footballer"
        type={FOOTBALL}
        contentData={footballerData}
      />
      <br />
      <GridArrange
        title="PLAYERS"
        img="basketballer"
        type={BASKETBALL}
        contentData={basketballerData}
      />
    </div>
  );
};

export default AthletsComponent;