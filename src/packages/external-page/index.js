import React, { useMemo } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

import { Breadcrumbs, LegacyDiv, LegacyHeading } from '../../components';

import CustomPagination from '../../components/ui/CustomPagination';
import CategoryPageTemplate from '../../templates/CategoryPageTemplate';

export default (props) => {
  const { articles } = props;

  const externalNews = useMemo(
    () =>
      articles
        .filter(
          (article) =>
            article.category === 'external' && article.status === 'published',
        )
        .sort((a, b) => {
          const dateA = a.publishDate.split('-').reverse().join('-');
          const dateB = b.publishDate.split('-').reverse().join('-');
          return new Date(dateB) - new Date(dateA);
        }),
    [articles],
  );

  return (
    <LegacyDiv>
      <LegacyDiv
        styleProps={{
          ALL_DEVICES: {
            flexDirection: 'column',
            maxWidth: '1440px',
            '& > div:nth-child(2)': {
              flexDirection: 'column',
            },
          },
        }}
      >
        <LegacyDiv
          styleProps={{
            ALL_DEVICES: {
              justifyContent: 'space-between',
              maxWidth: '1100px',
              margin: '48px 0',
            },
          }}
        >
          <LegacyDiv
            styleProps={{
              ALL_DEVICES: {
                width: 'fit-content',
              },
            }}
          >
            <FaGlobeAmericas
              style={{ color: '#34bf49', marginRight: '8' }}
              size={50}
            />
            <LegacyHeading
              text="External"
              styleProps={{
                ALL_DEVICES: {
                  fontSize: '28px',
                  fontWeight: '700',
                },
              }}
            />
          </LegacyDiv>
          <Breadcrumbs />
        </LegacyDiv>
        <CustomPagination
          data={externalNews}
          template={CategoryPageTemplate}
          itemsPerPage={5}
        />
      </LegacyDiv>
    </LegacyDiv>
  );
};
