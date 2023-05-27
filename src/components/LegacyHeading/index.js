import React from 'react';
import styled from 'styled-components';
import { headingVariants } from '../../types/headingVariants';

const HeadingBase = ({
  variant,
  styleProps: _styleProps,
  as: Component = variant,
  ...props
}) => <Component {...props} />;

const StyledHeading = styled(HeadingBase)`
  text-align: center;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

export default ({
  className,
  variant = headingVariants.H1,
  styleProps,
  text,
  ...otherProps
}) => {
  return (
    <StyledHeading
      variant={variant}
      className={className}
      styleProps={styleProps}
      {...otherProps}
    >
      {text}
    </StyledHeading>
  );
};
