import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background: transparent;
  position: relative;
  ${(props) => props.theme.toRawCss(props.styleProps || {})};
`;

export default forwardRef(
  ({ className, styleProps, style, children, ...otherProps }, ref) => {
    return (
      <StyledDiv
        ref={ref}
        styleProps={styleProps}
        className={className}
        style={style}
        {...otherProps}
      >
        {children}
      </StyledDiv>
    );
  },
);
