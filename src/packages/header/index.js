import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router';

import { DarkOverlay, LegacyDiv, LegacyLink } from '../../components';
import { logoUrl } from './assets';
import BlogSubmenu from './components/BlogSubmenu';
import headerStyleProps from './styles/headerStyleProps';
import headerLinksStyleProps from './styles/headerLinksStyleProps';

const StyledHeader = styled.header`
  ${(props) => props.theme.toRawCss(props.styleProps || {})};
`;

export default (props) => {
  const { articles } = props;

  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const navigator = useNavigate();

  const handleSubmenuHover = () => {
    setSubmenuOpen((prevState) => !prevState);
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
          <LegacyLink text="Home" onClick={() => navigator('/')} />
          <LegacyLink text="Sport" onClick={() => navigator('/sport')} />
          <LegacyLink text="Politics" onClick={() => navigator('/politics')} />
          <LegacyLink text="Social" onClick={() => navigator('/social')} />
          <LegacyLink text="External" onClick={() => navigator('/external')} />
          <LegacyLink
            text="Economics"
            onClick={() => navigator('/economics')}
          />
          <LegacyDiv
            onMouseEnter={handleSubmenuHover}
            onMouseLeave={handleSubmenuHover}
          >
            <LegacyLink text="Blog" />
            <IoIosArrowDown />
            {isSubmenuOpen && <BlogSubmenu articles={articles} />}
          </LegacyDiv>
        </LegacyDiv>
      </StyledHeader>
      {isSubmenuOpen && <DarkOverlay />}
    </>
  );
};
