import React from 'react';
import { useNavigate } from 'react-router';

import {
  CustomSpan,
  LegacyDiv,
  LegacyLink,
  LegacyParagraph,
} from '../../../components';
import breakingNewsContainerStyleProps from '../styles/breakingNewsContainerStyleProps';
import filterArticlesToShow from '../../../helpers/filterArticlesToShow';

export default ({ articles }) => {
  const categories = ['sport', 'politics', 'social', 'external', 'economics'];
  const navigator = useNavigate();

  const newestArticlesRender = (category) => {
    const [article] = filterArticlesToShow(articles, category, 0, 1);

    return article;
  };

  return (
    <LegacyDiv styleProps={breakingNewsContainerStyleProps}>
      {categories.map((card) => {
        if (!newestArticlesRender(card)) {
          return '';
        }

        const {
          category,
          featuredImage,
          featuredImageAlt,
          title,
          author,
          publishDate,
          slug,
        } = newestArticlesRender(card);

        return (
          <LegacyDiv key={card}>
            <img src={featuredImage} alt={featuredImageAlt} />
            <LegacyDiv>
              <LegacyDiv>
                <CustomSpan>{category}</CustomSpan>
                <LegacyLink
                  text={title}
                  onClick={() => navigator(`/${category}/${slug}`)}
                />
                <LegacyParagraph
                  text={`${publishDate} / BY ${author.toUpperCase()}`}
                />
              </LegacyDiv>
            </LegacyDiv>
          </LegacyDiv>
        );
      })}
    </LegacyDiv>
  );
};
