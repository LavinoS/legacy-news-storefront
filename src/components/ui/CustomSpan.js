import styled from 'styled-components';

export default styled.span`
  ${(props) => props.theme.toRawCss(props.styleProps)}
`;
