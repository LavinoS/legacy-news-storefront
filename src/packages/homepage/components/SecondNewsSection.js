import React from 'react';
import { useNavigate } from 'react-router';

import { LegacyButton, LegacyDiv } from '../../../components';
import ExternalCard from './ExternalCard';
import EconomicsCard from './EconomicsCard';

export default ({ articles }) => {
  const navigator = useNavigate();

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          alignItems: 'start',
          '& > div:nth-child(1)': {
            width: '75%',
            flexDirection: 'column',
            paddingRight: '15px',
            alignItems: 'start',
          },
          '& > div:nth-child(2)': {
            width: '25%',
            flexDirection: 'column',
            paddingLeft: '15px',
            alignItems: 'start',
          },
        },
      }}
    >
      <LegacyDiv>
        <LegacyButton
          styleProps={{
            ALL_DEVICES: {
              width: 'fit-content',
              fontSize: '16px',
              borderRadius: '3px',
              padding: '6px 16px',
              background: '#34bf49',
              fontWeight: '700',
              border: 'none',
              marginBottom: '24px',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
          text="External"
          onClick={() => navigator('/external')}
        />
        <ExternalCard articles={articles} />
      </LegacyDiv>
      <LegacyDiv>
        <LegacyButton
          styleProps={{
            ALL_DEVICES: {
              width: 'fit-content',
              fontSize: '16px',
              borderRadius: '3px',
              padding: '6px 16px',
              background: '#ffb900',
              fontWeight: '700',
              border: 'none',
              marginBottom: '24px',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
          text="Economics"
          onClick={() => navigator('/economics')}
        />
        <EconomicsCard articles={articles} />
      </LegacyDiv>
    </LegacyDiv>
  );
};
