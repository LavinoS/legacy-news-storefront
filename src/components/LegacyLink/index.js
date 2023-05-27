import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

export default ({
  className,
  styleProps,
  linkTarget = '_self',
  text,
  redirectPath,
  onClick,
  ...otherProps
}) => {
  return (
    <StyledLink
      className={className}
      styleProps={styleProps}
      target={linkTarget}
      href={redirectPath}
      onClick={onClick}
      {...otherProps}
    >
      {text}
    </StyledLink>
  );
};
