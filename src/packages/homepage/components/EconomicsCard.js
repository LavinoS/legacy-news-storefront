import React from 'react';
import { useNavigate } from 'react-router';

import filterArticlesToShow from '../../../helpers/filterArticlesToShow';
import { LegacyDiv, LegacyHeading, LegacyParagraph } from '../../../components';

export default ({ articles }) => {
  const navigator = useNavigate();
  const economicsNewsSection = filterArticlesToShow(
    articles,
    'economics',
    1,
    4,
  );

  return (
    <>
      {economicsNewsSection.map((entity, index) => {
        if (!economicsNewsSection) {
          return '';
        }

        const {
          featuredImage,
          featuredImageAlt,
          slug,
          title,
          author,
          category,
          publishDate,
        } = entity;

        return (
          <LegacyDiv
            key={index}
            styleProps={{
              ALL_DEVICES: {
                flexDirection: 'column',
                marginBottom: '42px',
              },
            }}
          >
            <img
              src={featuredImage}
              alt={featuredImageAlt}
              style={{
                height: '150px',
                width: '100%',
                objectFit: 'cover',
                marginBottom: '12px',
              }}
            />
            <LegacyHeading
              text={title}
              styleProps={{
                ALL_DEVICES: {
                  textAlign: 'start',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  width: '100%',
                  fontSize: '18px',
                  '-webkit-box-orient': 'vertical',
                  '-webkit-line-clamp': '1',
                  display: '-webkit-box',
                  overflow: 'hidden',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                },
              }}
              onClick={() => navigator(`/${category}/${slug}`)}
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
