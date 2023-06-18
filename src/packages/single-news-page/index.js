import React, { useContext } from 'react';

import {
  Breadcrumbs,
  LegacyDiv,
  LegacyHeading,
  LegacyParagraph,
  Spacer,
} from '../../components';
import SectionsRenderer from '../../context/SectionsRenderer';
import SingleNewsCategoryButton from './components/SingleNewsCategoryButton';

export default (props) => {
  const {
    category = '',
    title = '',
    publishDate = new Date(),
    author = '',
    featuredImage = '',
    featuredImageAlt = 'image',
    sections = [],
  } = props;

  const PresetsRenderer = useContext(SectionsRenderer);

  return (
    <LegacyDiv>
      <LegacyDiv
        styleProps={{
          ALL_DEVICES: {
            flexDirection: 'column',
            maxWidth: '1440px',
          },
        }}
      >
        <LegacyDiv
          styleProps={{
            ALL_DEVICES: {
              maxWidth: '1100px',
              margin: '48px 0',
              flexDirection: 'column',
            },
          }}
        >
          <Breadcrumbs />
          <SingleNewsCategoryButton category={category} />
        </LegacyDiv>
        <LegacyDiv
          styleProps={{
            ALL_DEVICES: {
              maxWidth: '920px',
              margin: '24px 0 0',
              flexDirection: 'column',
            },
          }}
        >
          <LegacyHeading
            styleProps={{
              ALL_DEVICES: {
                fontSize: '42px',
              },
            }}
            text={title}
          />
          <LegacyParagraph
            styleProps={{
              ALL_DEVICES: {
                width: '100%',
                color: '#a3a5a8',
                fontSize: '12px',
                fontWeight: '500',
                textTransform: 'uppercase',
                marginTop: '12px',
                letterSpacing: '1px',
              },
            }}
            text={`${publishDate} /  BY ${author}`}
          />
          <img
            src={featuredImage}
            alt={featuredImageAlt}
            style={{
              height: '500px',
              objectFit: 'cover',
              width: '100%',
              margin: '24px 0',
            }}
          />
        </LegacyDiv>
        <LegacyDiv
          styleProps={{
            ALL_DEVICES: {
              flexDirection: 'column',
              maxWidth: '920px',
              marginBottom: '40px',
            },
          }}
        >
          {sections.map(({ type, ...otherProps }, index) => {
            return (
              <>
                <Spacer height="40" />
                <PresetsRenderer key={index} type={type} {...otherProps} />
              </>
            );
          })}
        </LegacyDiv>
      </LegacyDiv>
    </LegacyDiv>
  );
};
