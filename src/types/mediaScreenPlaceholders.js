import ResponsiveBreakpoints from './responsiveBreakpoints';
import ScreenTypes from './screenTypes';

const mediaScreenPlaceholders = {
  MOBILE: `@media only screen and ${ResponsiveBreakpoints[ScreenTypes.MOBILE]}`,
  TABLET: `@media only screen and ${ResponsiveBreakpoints[ScreenTypes.TABLET]}`,
};

export default mediaScreenPlaceholders;
