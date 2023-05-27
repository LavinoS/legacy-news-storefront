import React, { useState } from 'react';

import { LegacyButton, LegacyDiv, LegacyParagraph } from '../../../components';
import blogSubmenuInterface from '../utils/blogSubmenuInterface';
import findArticlesByProperty from '../helpers/findArticlesByProperty';
import defaultMenuButtonsStyleProps from '../styles/defaultMenuButtonsStyleProps';
import mergeStyles from '../../../helpers/mergeStyles';
import submenuContainerStyleProps from '../styles/submenuContainerStyleProps';
import submenuButtonsContainerStyleProps from '../styles/submenuButtonsContainerStyleProps';
import imagesContainerStyleProps from '../styles/imagesContainerStyleProps';

export default (props) => {
  const { articles } = props;
  const [filteredArticles, setFilteredArticles] = useState(
    findArticlesByProperty(articles),
  );
  const [selectedButton, setSelectedButton] = useState(0);

  const handleFilterSubmenuArticles = (searchedProperty, index) => {
    setFilteredArticles(findArticlesByProperty(articles, searchedProperty));
    setSelectedButton(index);
  };

  const activeMenuButtonStyleProps = mergeStyles(defaultMenuButtonsStyleProps, {
    ALL_DEVICES: {
      background: '#FFF',
    },
  });

  const checkingForStyle = (index) => {
    return index === selectedButton
      ? activeMenuButtonStyleProps
      : defaultMenuButtonsStyleProps;
  };

  return (
    <LegacyDiv styleProps={submenuContainerStyleProps}>
      <LegacyDiv styleProps={submenuButtonsContainerStyleProps}>
        {blogSubmenuInterface.map(({ title, searchedProperty }, index) => (
          <LegacyButton
            key={index}
            onClick={() => handleFilterSubmenuArticles(searchedProperty)}
            text={title}
            styleProps={checkingForStyle(index)}
          />
        ))}
      </LegacyDiv>
      <LegacyDiv styleProps={imagesContainerStyleProps}>
        {filteredArticles.map(
          ({ featuredImage, featuredImageAlt, title }, index) => (
            <LegacyDiv key={index}>
              <img
                src={featuredImage}
                alt={featuredImageAlt}
                style={{
                  height: '110px',
                  objectFit: 'contain',
                }}
              />
              <LegacyParagraph text={title} />
            </LegacyDiv>
          ),
        )}
      </LegacyDiv>
    </LegacyDiv>
  );
};
