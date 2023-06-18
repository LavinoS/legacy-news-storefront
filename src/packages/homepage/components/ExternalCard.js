import React from 'react';

import filterArticlesToShow from '../../../helpers/filterArticlesToShow';
import CategoryPageTemplate from '../../../templates/CategoryPageTemplate';

export default ({ articles }) => {
  const externalNewsSection = filterArticlesToShow(articles, 'external', 1, 4);

  return (
    <>
      {externalNewsSection.map((entity, index) => {
        if (!externalNewsSection) {
          return '';
        }

        return <CategoryPageTemplate key={index} {...entity} />;
      })}
    </>
  );
};
