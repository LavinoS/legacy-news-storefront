import React from 'react';
import { useNavigate } from 'react-router';

import { LegacyButton, LegacyDiv } from '../../../components';
import SportCard from './SportCard';
import PoliticsCard from './PoliticsCard';

export default ({ articles }) => {
  const navigator = useNavigate();

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          alignItems: 'start',
          '& > div': {
            width: '50%',
          },
        },
      }}
    >
      <LegacyDiv
        styleProps={{
          ALL_DEVICES: {
            flexDirection: 'column',
            alignItems: 'start',
            paddingRight: '16px',
          },
        }}
      >
        <LegacyButton
          styleProps={{
            ALL_DEVICES: {
              width: 'fit-content',
              fontSize: '16px',
              borderRadius: '3px',
              padding: '6px 16px',
              background: '#2ad2c9',
              fontWeight: '700',
              border: 'none',
              marginBottom: '24px',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
          text="Sport"
          onClick={() => navigator('/sport')}
        />
        <LegacyDiv
          styleProps={{
            ALL_DEVICES: {
              flexDirection: 'column',
              '& > div': {
                flexDirection: 'column',
                marginBottom: '48px',
              },
            },
          }}
        >
          <SportCard articles={articles} />
        </LegacyDiv>
      </LegacyDiv>
      <LegacyDiv
        styleProps={{
          ALL_DEVICES: {
            paddingLeft: '16px',
            flexDirection: 'column',
            alignItems: 'start',
            '& > div': {
              height: '100%',
              alignItems: 'start',
              flexWrap: 'wrap',
              justifyContent: 'start',
              '& > div:nth-child(odd)': {
                paddingRight: '15px',
              },
              '& > div:nth-child(even)': {
                paddingLeft: '15px',
              },
            },
          },
        }}
      >
        <LegacyButton
          styleProps={{
            ALL_DEVICES: {
              width: 'fit-content',
              fontSize: '16px',
              borderRadius: '3px',
              padding: '6px 16px',
              background: '#deacca',
              fontWeight: '700',
              border: 'none',
              marginBottom: '24px',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
          text="Politics"
          onClick={() => navigator('/politics')}
        />
        <LegacyDiv>
          <PoliticsCard articles={articles} />
        </LegacyDiv>
      </LegacyDiv>
    </LegacyDiv>
  );
};
