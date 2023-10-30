import React from 'react';
import Image from 'next/image';
import { Row, Col, Typography } from 'antd';
import { ContentSectionProps, GridArrangeProps } from '@/common/interfaces';
import CarouselCustom from '../CarouselCustom';
import ContentSection from '../ContentSection';

const { Title } = Typography;
  
const GridArrange = (props: GridArrangeProps) => {
  const { title, img, type, contentData } = props;
  const imgDesktop = `/${img}.png`;
  const imgMobile = `/${img}-mobile.png`;
  return (
    <Row
      gutter={[16, 16]}
      style={{ position: 'relative', paddingTop: 16, paddingBottom: 16, marginBottom: 16 }}
    >
      <Col
        sm={24}
        md={{ span: 12, offset: type === 'football' ? 12 : 4 }}
        lg={{ span: 12, offset: type === 'football' ? 12 : 4 }}
      >
        <Title
          level={1}
          style={{ color: '#E7E7E7', fontWeight: 400 }}
        >
          {title}
        </Title>
      </Col>
      <div
        style={{
          position: 'absolute',
          top: type === 'football' ? 32 : -64,
          left: type === 'football' ? 175 : 804,
          zIndex: 1
        }}
      >
        <Image
          src={imgDesktop}
          alt={img}
          priority
          width={type === 'football' ? 671 : 892}
          height={type === 'football' ? 940: 734}
        />
      </div>
      {/* <Col
        sm={24}
        md={0}
        lg={0}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {img}
      </Col> */}
        {/* <CarouselCustom type={type}>
          {content}
        </CarouselCustom> */}
      {contentData.map((item, ) => {
        const sequence = item?.sequence;
        
        return (
          <Col
            key={type + sequence}
            sm={24}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              paddingTop: (sequence === '03' && type === 'football') ? '4rem' : '4rem',
              paddingBottom: (sequence === '03' && type === 'football') ? '4rem' : '4rem',
              backgroundColor: sequence === '03' ? (type === 'football' ? '#5E3DB3' : '#090C35') : undefined
            }}
          >
              <Col
                sm={24}
                md={{ span: 10, offset: type === 'football' ? 12 : 4 }}
                lg={{ span: 10, offset: type === 'football' ? 12 : 4 }}
              >
                <ContentSection
                  {...item}
                  type={type}
                />
              </Col>
          </Col>
        );
      })}
    </Row>
  );
}

export default GridArrange;