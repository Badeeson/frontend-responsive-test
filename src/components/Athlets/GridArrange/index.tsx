import React from 'react';
import Image from 'next/image';
import { Row, Col, Grid, Typography } from 'antd';
import { ContentSectionProps, GridArrangeProps } from '@/common/interfaces';
import CarouselCustom from '../CarouselCustom';
import ContentSection from '../ContentSection';

const { useBreakpoint } = Grid;
const { Title } = Typography;

const GridArrange = (props: GridArrangeProps) => {
  const { title, img, type, contentData } = props;
  const screens = useBreakpoint();
  const imgDesktop = `/${img}.png`;
  const imgMobile = `/${img}-mobile.png`;
  const chkScrn = Object.entries(screens).filter((screen) => !!screen[1]).at(-1)?.[0];
  const isMobile = ['xs', 'sm'].includes(chkScrn ?? '');
  const isDesktop = ['xl', 'xxl'];
  const isTablet = () => ['md', 'lg'].includes(chkScrn ?? '');
  const typeIsFootball = () => type === 'football';
  
  return (
    <Row
      gutter={[32, 32]}
      style={{ position: 'relative', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '1rem', marginBottom: '1rem' }}
    >
      <Col
        xs={24}
        sm={24}
        md={{ span: 14, offset: typeIsFootball() ? 10 : 1 }}
        lg={{ span: 16, offset: typeIsFootball() ? 7 : 1 }}
        xl={{ span: 10, offset: typeIsFootball() ? 12 : 3 }}
        xxl={{ span: 10, offset: typeIsFootball() ? 12 : 3 }}
      >
        <Title
          level={1}
          style={{ color: '#E7E7E7', fontWeight: 400 }}
        >
          {title}
        </Title>
      </Col>
      {isMobile
        ? <Col
          xs={24}
          sm={24}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Image
            src={imgMobile}
            alt={img}
            priority
            width={(typeIsFootball() ? 218 : 302)}
            height={(typeIsFootball() ? 281: 250)}
          />
        </Col>
        : <div
          style={{
            position: 'absolute',
            top: isTablet() ? (typeIsFootball() ? '3%' : '-4%') : (typeIsFootball() ? '1%' : '-8%'),
            left: isTablet() ? (typeIsFootball() ? '-18%' : '43%') : (typeIsFootball() ? '4%' : '45%'),
            zIndex: 1
          }}
        >
          <Image
            src={imgDesktop}
            alt={img}
            priority
            width={isTablet() ? (typeIsFootball() ? 528 : 691) : (typeIsFootball() ? 671 : 892)}
            height={isTablet() ? (typeIsFootball() ? 800: 568) : typeIsFootball() ? 940: 734}
          />
        </div>
      }
      {isMobile
        ? <Col
          xs={24}
          sm={24}
        >
          <CarouselCustom type={type}>
            {contentData.map((item) => {
              const sequence = item?.sequence;
              return (
                <ContentSection
                  key={type + sequence}
                  {...item}
                  type={type}
                />
              );
            })}
          </CarouselCustom>
        </Col>
        : (contentData.map((item) => {
          const sequence = item?.sequence;
          
          return (
            <Col
              key={type + sequence}
              xs={24}
              sm={24}
              md={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
              style={{
                paddingTop: (sequence === '03' && type === 'football') ? (isTablet() ? '2rem' : '4rem') : (isTablet() ? '1rem' : '3rem'),
                paddingBottom: (sequence === '03' && type === 'football') ? (isTablet() ? '2rem' : '4rem') : (isTablet() ? '1rem' : '3rem'),
                backgroundColor: sequence === '03' ? (type === 'football' ? '#5E3DB3' : '#090C35') : undefined
              }}
            >
              <Row>
                <Col
                  xs={24}
                  sm={24}
                  md={{ span: 14, offset: typeIsFootball() ? 10 : 1 }}
                  lg={{ span: 16, offset: typeIsFootball() ? 7 : 1 }}
                  xl={{ span: 10, offset: typeIsFootball() ? 12 : 3 }}    
                  xxl={{ span: 10, offset: typeIsFootball() ? 12 : 3 }}
                >
                  <ContentSection
                    {...item}
                    type={type}
                  />
                </Col>
              </Row>
            </Col>
          );
        }))
      }
    </Row>
  );
}

export default GridArrange;