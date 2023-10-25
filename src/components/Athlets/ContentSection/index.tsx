import React from 'react';
import { Typography } from 'antd';
import { ContentSectionProps } from '@/common/interfaces';

const { Title, Paragraph } = Typography;

const ContentSection = (props: ContentSectionProps) => {
  const { sequence, label, description, type } = props;
  return (
    <Typography>
      <Title
        level={2}
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#C2C2C2',
          fontWeight: 400
        }}
      >
        <span
          style={{
            color: type === 'basketball' ? '#8F6BE8' : '#000000',
            fontSize: '0.5em',
            textDecoration: 'underline',
            textDecorationThickness: 4,
            textDecorationColor: sequence === '03' ? '#C2C2C2' : '#603EBE',
            marginRight: 12
          }}
        >
          {sequence}
        </span>
        {label}
      </Title>
      <Paragraph style={{ color: sequence === '03' ? '#FFFFFF' : '#000000' }}>
        {description}
      </Paragraph>
    </Typography>
  );
}

export default ContentSection;