import React from 'react';
import { useNavigate } from 'react-router';

import { LegacyButton, LegacyDiv } from '../../../components';
import filterArticlesToShow from '../../../helpers/filterArticlesToShow';
import CategoryPageTemplate from '../../../templates/CategoryPageTemplate';

export default ({ articles }) => {
  const navigator = useNavigate();
  const socialNewsSection = filterArticlesToShow(articles, 'social', 1, 5);

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          alignItems: 'start',
          justifyContent: 'start',
          flexDirection: 'column',
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
            background: '#ed1b2e',
            fontWeight: '700',
            border: 'none',
            marginBottom: '24px',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        }}
        text="Social"
        onClick={() => navigator('/social')}
      />
      {socialNewsSection.map((entity, index) => {
        if (!socialNewsSection) {
          return '';
        }

        return <CategoryPageTemplate key={index} {...entity} />;
      })}
    </LegacyDiv>
  );
};
