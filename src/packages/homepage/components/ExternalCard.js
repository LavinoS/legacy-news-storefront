import React from 'react';
import { useNavigate } from 'react-router';

import filterArticlesToShow from '../../../helpers/filterArticlesToShow';
import { LegacyDiv, LegacyHeading, LegacyParagraph } from '../../../components';

export default ({ articles }) => {
  const navigator = useNavigate();
  const externalNewsSection = filterArticlesToShow(articles, 'external', 1, 4);

  return (
    <>
      {externalNewsSection.map((entity, index) => {
        if (!externalNewsSection) {
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
    </>
  );
};
