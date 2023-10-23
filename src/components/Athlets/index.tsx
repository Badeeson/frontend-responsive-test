import React from 'react';
import Image from 'next/image';
import { Col, Row, theme } from 'antd';
import { Typography } from 'antd';
import './index.css';
import CarouselCustom from './Carousel';

const { Title } = Typography;

const footballerData = [
  {
    sequence: '01',
    label: 'CONNECTION',
    content: 'Connect with coaches directly, you can ping coaches to view profile.',
  },
  {
    sequence: '02',
    label: 'COLLABORATION',
    content: 'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
  },
  {
    sequence: '03',
    label: 'GROWTH',
    content: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc.',
  }
]

const basketballerData = [
  {
    sequence: '01',
    label: 'CONNECTION',
    content: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'
  },
  {
    sequence: '02',
    label: 'COLLABORATION',
    content: 'Work with recruiter to increase your chances of finding talented athlete.',
  },
  {
    sequence: '03',
    label: 'GROWTH',
    content: 'Save your time, recruit proper athlets for your team.',
  }
];

const AthletsComponent: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title
            level={1}
            style={{ color: '#E7E7E7', fontWeight: 400 }}
          >
            ATHLETS
          </Title>
        </Col>
      </Row>
      <Row
        align="middle"
        justify="center"
        gutter={[16, 16]}
      >
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/footballer.png"
            alt="Footballer"
            // className={styles.vercelLogo}
            width={200}
            height={281}
          />
        </Col>
        <Col span={24}>
          <CarouselCustom data={footballerData} type="football" />
        </Col>
      </Row>
      <Row
        align="middle"
        justify="center"
        gutter={[16, 16]}
      >
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/basketballer.png"
            alt="Basketballer"
            width={200}
            height={281}
          />
        </Col>
        <Col span={24}>
          <CarouselCustom data={basketballerData} type="basketball" />
        </Col>
      </Row>
    </div>
  );
};

export default AthletsComponent;
