import { css } from 'styled-components';

const convertStyleToCSS = (styles) => ({
  styleObjects: [css(styles).join('\n')],
});

export default convertStyleToCSS;
