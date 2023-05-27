import React from 'react';
import { ThemeProvider, css } from 'styled-components';
import convertStyleToCSS from './helpers/convertStyleToCSS';
import ScreenTypes from '../types/screenTypes';
import mediaScreenPlaceholders from '../types/mediaScreenPlaceholders';
import GlobalStyles from './global/globalStyles';

const toRawCss = (styleProps) => {
  const devices = Object.keys(styleProps || []);
  const mediaStyles = [];

  devices.forEach((device) => {
    const { styleObjects } = convertStyleToCSS(styleProps[device]);

    if (device === ScreenTypes.ALL_DEVICES) {
      mediaStyles.push([...styleObjects]);
    }

    mediaStyles.push(
      css`
        ${mediaScreenPlaceholders[device]} {
          ${styleObjects}
        } ;
      `,
    );
  });

  return css`
    ${mediaStyles}
  `;
};

export default ({ children }) => {
  return (
    <ThemeProvider theme={{ toRawCss: toRawCss }}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
