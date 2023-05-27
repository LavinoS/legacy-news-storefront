import React, {
  forwardRef,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import { LegacyDiv, LegacyLink, LegacyParagraph } from '../index';

const StyledButton = styled.button`
  width: 100%;
  height: fit-content;
  padding: 15px 20px;
  margin: 0;
  background: #000;
  color: #fff;
  cursor: pointer;
  text-align: center;
  position: relative;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

const StyledUnorderedList = styled.ul`
  list-style: none;
  display: flex;
  padding: 12px 0;
`;

const StyledDots = styled.li`
  background: #7b809a;
  width: 5px;
  height: 5px;
  margin: 0 3px;
  border-radius: 50%;
`;

export default forwardRef(
  (
    {
      className,
      styleProps,
      onClick,
      ariaLabel,
      paragraphClass,
      text,
      paragraphStyle,
      dropdownConfig: {
        isDropdownButton = false,
        optionsConfig = [],
        activeMenuStyle = {},
      } = {},
      children,
      ...otherProps
    },
    ref,
  ) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setActiveMenu(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [menuRef]);

    const handleOpenMenu = () => {
      setActiveMenu((prevState) => !prevState);
    };

    return (
      <StyledButton
        className={className}
        ref={ref}
        styleProps={styleProps}
        onClick={onClick}
        aria-label={ariaLabel}
        {...otherProps}
      >
        {children}
        {!isDropdownButton ? (
          <LegacyParagraph
            className={paragraphClass}
            styleProps={paragraphStyle}
            text={text}
          />
        ) : (
          <>
            <StyledUnorderedList onClick={handleOpenMenu}>
              <StyledDots />
              <StyledDots />
              <StyledDots />
            </StyledUnorderedList>
            {activeMenu && (
              <LegacyDiv
                ref={menuRef}
                styleProps={activeMenuStyle}
                onClick={handleOpenMenu}
              >
                {optionsConfig.map(({ styleProps, onClick, text }, index) => (
                  <Fragment key={index}>
                    <LegacyLink
                      text={text}
                      onClick={onClick}
                      styleProps={styleProps}
                    />
                  </Fragment>
                ))}
              </LegacyDiv>
            )}
          </>
        )}
      </StyledButton>
    );
  },
);
