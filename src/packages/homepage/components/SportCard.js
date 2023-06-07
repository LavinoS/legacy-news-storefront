import React from 'react';
import { useNavigate } from 'react-router';

import filterArticlesToShow from '../../../helpers/filterArticlesToShow';
import { LegacyDiv, LegacyHeading, LegacyParagraph } from '../../../components';

export default ({ articles }) => {
  const navigator = useNavigate();
  const sportNewsSection = filterArticlesToShow(articles, 'sport', 1, 3);

  return (
    <>
      {sportNewsSection.map((entity, index) => {
        if (!sportNewsSection) {
          return '';
        }

        const {
          featuredImage,
          featuredImageAlt,
          slug,
          summary,
          title,
          author,
          category,
          publishDate,
        } = entity;

        return (
          <LegacyDiv key={index}>
            <img
              src={featuredImage}
              alt={featuredImageAlt}
              style={{
                height: '300px',
                width: '100%',
                objectFit: 'cover',
                marginBottom: '12px',
              }}
            />
            <LegacyHeading
              styleProps={{
                ALL_DEVICES: {
                  textAlign: 'start',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  width: '100%',
                  fontSize: '28px',
                  '-webkit-box-orient': 'vertical',
                  '-webkit-line-clamp': '2',
                  display: '-webkit-box',
                  overflow: 'hidden',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                },
              }}
              text={title}
              onClick={() => navigator(`/${category}/${slug}`)}
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
        );
      })}
    </>
  );
};
