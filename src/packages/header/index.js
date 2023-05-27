import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

import { DarkOverlay, LegacyDiv, LegacyLink } from '../../components';
import { logoUrl } from './assets';
import BlogSubmenu from './components/BlogSubmenu';
import headerStyleProps from './styles/headerStyleProps';
import headerLinksStyleProps from './styles/headerLinksStyleProps';

const StyledHeader = styled.header`
  ${(props) => props.theme.toRawCss(props.styleProps || {})};
`;

export default (props) => {
  const { receiveArticlesMethod } = props;

  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    receiveArticlesMethod({
      params: { limit: 100 },
      callback: (result) => {
        if (result.success) {
          setArticles(result.data);
        }
      },
    });
  }, []);

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
          <LegacyLink text="Home" />
          <LegacyLink text="Sport" />
          <LegacyLink text="Political" />
          <LegacyLink text="Social" />
          <LegacyLink text="External" />
          <LegacyLink text="Economic" />
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
