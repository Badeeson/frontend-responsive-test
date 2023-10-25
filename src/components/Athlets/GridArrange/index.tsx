import React from 'react';
import { Row, Col, Typography } from 'antd';
import { ContentSectionProps, GridArrangeProps } from '@/common/interfaces';
import CarouselCustom from '../CarouselCustom';
import ContentSection from '../ContentSection';

const { Title } = Typography;
  
const GridArrange = (props: GridArrangeProps) => {
  const { title, img, type, contentData } = props;
  return (
    <Row
      // align="middle"
      // justify="center"
      gutter={[16, 16]}
      style={{ paddingBottom: 32 }}
    >
      <Col
        sm={24}
        md={{ span: 12, offset: type === 'football' ? 12 : 3 }}
        lg={{ span: 12, offset: type === 'football' ? 12 : 3 }}
      >
        <Title
          level={1}
          style={{ color: '#E7E7E7', fontWeight: 400 }}
        >
          {title}
        </Title>
      </Col>
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
              paddingTop: (sequence === '03' && type === 'football') ? '4rem' : '3rem',
              paddingBottom: (sequence === '03' && type === 'football') ? '4rem' : '3rem',
              backgroundColor: sequence === '03' ? (type === 'football' ? '#5E3DB3' : '#090C35') : undefined
            }}
          >
              <Col
                sm={24}
                md={{ span: 10, offset: type === 'football' ? 12 : 3 }}
                lg={{ span: 10, offset: type === 'football' ? 12 : 3 }}
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