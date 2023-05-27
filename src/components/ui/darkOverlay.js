import styled from 'styled-components';

const darkOverlay = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.6;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(195deg, #42424a 0%, #191919 100%);
  z-index: 1;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

export default darkOverlay;
