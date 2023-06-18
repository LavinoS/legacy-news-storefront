import React from 'react';
import { LegacyButton } from '../../../components';
import { useNavigate } from 'react-router';
import { capitalize } from 'lodash';

export default ({ category }) => {
  const navigator = useNavigate();
  let color = '#2ad2c9';

  switch (category) {
    case 'politics':
      color = '#deacca';
      break;

    case 'social':
      color = '#ed1b2e';
      break;

    case 'external':
      color = '#34bf49';
      break;

    case 'economics':
      color = '#ffb900';
      break;
  }

  return (
    <LegacyButton
      styleProps={{
        ALL_DEVICES: {
          width: 'fit-content',
          fontSize: '16px',
          borderRadius: '3px',
          padding: '6px 16px',
          background: color,
          fontWeight: '700',
          border: 'none',
          marginTop: '12px',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      }}
      text={capitalize(category)}
      onClick={() => navigator(`/${category}`)}
    />
  );
};
