import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    margin: 8px;
    border-radius: 50%;
    border: 10px solid #ec407a;
    border-color: #ec407a transparent #ec407a transparent;
    animation: ${loadingAnimation} 1.2s linear infinite;
  }

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

export default StyledLoader;
