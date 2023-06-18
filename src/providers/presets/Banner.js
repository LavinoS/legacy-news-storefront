import React from 'react';
import { LegacyDiv } from '../../components';

export default (props) => {
  const { options: { source, alt = 'image' } = {} } = props;

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          width: '100%',
          height: '500px',
        },
      }}
    >
      <img
        src={source}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </LegacyDiv>
  );
};
