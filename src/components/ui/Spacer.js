import styled from 'styled-components';

export default styled.div.withConfig({
  shouldForwardProp: (props) => !['height'].includes(props),
})`
  width: 100%;
  height: ${({ height }) => `${height}px`};
`;
