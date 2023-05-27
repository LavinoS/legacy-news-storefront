import ScreenTypes from './screenTypes';
import ResponsiveLayoutSizes from './responsiveLayoutSizes';

const responsiveBreakpoints = {
  [ScreenTypes.TABLET]: `(min-width: ${
    ResponsiveLayoutSizes.TABLET
  }px) and (max-width: ${ResponsiveLayoutSizes.DESKTOP - 1}px)`,
  [ScreenTypes.MOBILE]: `(max-width: ${ResponsiveLayoutSizes.TABLET - 1}px)`,
};

export default responsiveBreakpoints;
