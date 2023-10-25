import React from 'react';
import { Row, Col, Typography } from 'antd';
import { GridArrangeProps } from '@/common/interfaces';

const { Title } = Typography;
  
const GridArrange = (props: GridArrangeProps) => {
  const { title, img, content } = props;
  return (
    <Row
      align="middle"
      justify="center"
      gutter={[16, 16]}
    >
      <Col
        sm={24}
        md={{ span: 16, offset: 8 }}
        lg={{ span: 12, offset: 12 }}
      >
        <Title
          level={1}
          style={{ color: '#E7E7E7', fontWeight: 400 }}
        >
          {title}
        </Title>
      </Col>
      <Col
        sm={24}
        md={12}
        lg={12}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {img}
      </Col>
      <Col
        sm={24}
        md={12}
        lg={12}
      >
        {content}
      </Col>
    </Row>
  );
}

export default GridArrange;