import React from 'react';
import { useNavigate } from 'react-router';

import {
  LegacyButton,
  LegacyDiv,
  LegacyHeading,
  LegacyParagraph,
} from '../../../components';
import filterArticlesToShow from '../../../helpers/filterArticlesToShow';

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

        const {
          featuredImage,
          featuredImageAlt,
          slug,
          title,
          author,
          summary,
          category,
          publishDate,
        } = entity;

        return (
          <LegacyDiv
            key={index}
            styleProps={{
              ALL_DEVICES: {
                marginBottom: '42px',
                height: '250px',
                '& > div:nth-child(1)': {
                  width: '35%',
                  height: '100%',
                },
                '& > div:nth-child(2)': {
                  width: '65%',
                  paddingLeft: '30px',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  paddingTop: '16px',
                  height: '100%',
                },
              },
            }}
          >
            <LegacyDiv>
              <img
                src={featuredImage}
                alt={featuredImageAlt}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </LegacyDiv>
            <LegacyDiv>
              <LegacyHeading
                styleProps={{
                  ALL_DEVICES: {
                    textAlign: 'start',
                    marginBottom: '12px',
                    cursor: 'pointer',
                    width: '100%',
                    fontSize: '28px',
                    padding: '16px 24px',
                    marginLeft: '-110px',
                    '-webkit-box-orient': 'vertical',
                    '-webkit-line-clamp': '2',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    background: '#FFF',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  },
                }}
                onClick={() => navigator(`/${category}/${slug}`)}
                text={title}
              />
              <LegacyParagraph
                styleProps={{
                  ALL_DEVICES: {
                    textAlign: 'start',
                    height: '80px',
                    overflow: 'hidden',
                    width: '100%',
                    '-webkit-box-orient': 'vertical',
                    '-webkit-line-clamp': '3',
                    display: '-webkit-box',
                    color: '#5e5e5e',
                    lineHeight: '26px',
                    marginBottom: '12px',
                  },
                }}
                text={summary}
              />
              <LegacyParagraph
                styleProps={{
                  ALL_DEVICES: {
                    textAlign: 'start',
                    width: '100%',
                    color: '#111',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  },
                }}
                text={`${category} / ${publishDate} /  BY ${author}`}
              />
            </LegacyDiv>
          </LegacyDiv>
        );
      })}
    </LegacyDiv>
  );
};
