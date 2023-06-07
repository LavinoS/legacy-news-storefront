import React from 'react';

import { LegacyDiv, Spacer } from '../../components';
import BreakingNewsBanner from './components/BreakingNewsBanner';
import homepageContainerStyleProps from './styles/homepageContainerStyleProps';
import FirstNewsSection from './components/FirstNewsSection';
import SecondNewsSection from './components/SecondNewsSection';
import ThirdNewsSection from './components/ThirdNewsSection';

export default (props) => {
  const { articles } = props;

  return (
    <LegacyDiv styleProps={homepageContainerStyleProps}>
      <BreakingNewsBanner articles={articles} />
      <Spacer height="40" />
      <FirstNewsSection articles={articles} />
      <Spacer height="40" />
      <SecondNewsSection articles={articles} />
      <Spacer height="40" />
      <ThirdNewsSection articles={articles} />
      <Spacer height="40" />
    </LegacyDiv>
  );
};
