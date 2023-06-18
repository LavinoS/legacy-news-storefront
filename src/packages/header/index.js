import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import { LegacyDiv, LegacyLink } from '../../components';
import { logoUrl } from './assets';
import headerStyleProps from './styles/headerStyleProps';
import headerLinksStyleProps from './styles/headerLinksStyleProps';

const StyledHeader = styled.header`
  ${(props) => props.theme.toRawCss(props.styleProps || {})};
`;

export default () => {
  const navigator = useNavigate();

  const handleChangePage = (url) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigator(url);
  };

  return (
    <>
      <StyledHeader styleProps={headerStyleProps}>
        <LegacyDiv>
          <img
            src={logoUrl}
            alt="logo"
            style={{ objectFit: 'contain', height: '120px' }}
          />
        </LegacyDiv>
        <LegacyDiv styleProps={headerLinksStyleProps}>
          <LegacyLink text="Home" onClick={() => handleChangePage('/')} />
          <LegacyLink text="Sport" onClick={() => handleChangePage('/sport')} />
          <LegacyLink
            text="Politics"
            onClick={() => handleChangePage('/politics')}
          />
          <LegacyLink
            text="Social"
            onClick={() => handleChangePage('/social')}
          />
          <LegacyLink
            text="External"
            onClick={() => handleChangePage('/external')}
          />
          <LegacyLink
            text="Economics"
            onClick={() => handleChangePage('/economics')}
          />
        </LegacyDiv>
      </StyledHeader>
    </>
  );
};
