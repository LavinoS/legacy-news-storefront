import React from 'react';
import { useNavigate } from 'react-router';

import { LegacyDiv, LegacyHeading, LegacyParagraph } from '../components';

import categoryPageTemplateDefaultContainerStyle from './styles/categoryPageTemplateDefaultContainerStyle';
import categoryPageTemplateHeadingDefaultStyle from './styles/categoryPageTemplateHeadingDefaultStyle';
import categoryPageTemplateDefaultSummaryStyle from './styles/categoryPageTemplateDefaultSummaryStyle';
import categoryPageTemplateDefaultLabelsStyle from './styles/categoryPageTemplateDefaultLabelsStyle';

export default (props) => {
  const {
    category,
    slug,
    title,
    summary,
    publishDate,
    author,
    featuredImage,
    featuredImageAlt,
  } = props;

  const navigator = useNavigate();

  return (
    <LegacyDiv styleProps={categoryPageTemplateDefaultContainerStyle}>
      <LegacyDiv>
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={featuredImage}
          alt={featuredImageAlt}
        />
      </LegacyDiv>
      <LegacyDiv>
        <LegacyHeading
          styleProps={categoryPageTemplateHeadingDefaultStyle}
          onClick={() => navigator(`/${category}/${slug}`)}
          text={title}
        />
        <LegacyParagraph
          styleProps={categoryPageTemplateDefaultSummaryStyle}
          text={summary}
        />
        <LegacyParagraph
          styleProps={categoryPageTemplateDefaultLabelsStyle}
          text={`${category} / ${publishDate} /  BY ${author}`}
        />
      </LegacyDiv>
    </LegacyDiv>
  );
};
