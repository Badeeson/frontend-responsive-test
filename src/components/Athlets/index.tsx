import React from 'react';
import Image from 'next/image';
import { Col, Row, theme } from 'antd';
import { Typography } from 'antd';
import { Carousel } from 'antd';
import './index.css';

const { Title, Paragraph, Text } = Typography;

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

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
          <Carousel className="carousel-container" dots={{ className: 'carousel-dots-circle' }}>
            <Typography>
              <Title
                level={2}
                style={{ display: 'flex', alignItems: 'center', color: '#C2C2C2', fontWeight: 400 }}
              >
                <span
                  style={{ 
                    color: '#000000',
                    fontSize: '0.5em',
                    textDecoration: 'underline',
                    textDecorationThickness: 4,
                    textDecorationColor: '#603EBE',
                    marginRight: 12
                  }}
                >
                  {`01`}
                </span>
                {`COLLABORATION`}
              </Title>
              <Paragraph>
                Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
              </Paragraph>
            </Typography>
            <Typography>
              <Title
                level={2}
                style={{ display: 'flex', alignItems: 'center', color: '#C2C2C2', fontWeight: 400 }}
              >
                <span
                  style={{ 
                    color: '#000000',
                    fontSize: '0.5em',
                    textDecoration: 'underline',
                    textDecorationThickness: 4,
                    textDecorationColor: '#603EBE',
                    marginRight: 12
                  }}
                >
                  {`03`}
                </span>
                {`COLLABORATION`}
              </Title>
              <Paragraph>
                Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
              </Paragraph>
            </Typography>
            <Typography>
              <Title
                level={2}
                style={{ display: 'flex', alignItems: 'center', color: '#C2C2C2', fontWeight: 400 }}
              >
                <span
                  style={{ 
                    color: '#000000',
                    fontSize: '0.5em',
                    textDecoration: 'underline',
                    textDecorationThickness: 4,
                    textDecorationColor: '#603EBE',
                    marginRight: 12
                  }}
                >
                  {`03`}
                </span>
                {`COLLABORATION`}
              </Title>
              <Paragraph>
                Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
              </Paragraph>
            </Typography>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default AthletsComponent;
