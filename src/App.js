import React from 'react';

import ThemeProvider from './providers/ThemeProvider';
import NewsContainer from './shared/containers/newsContainer';

export default () => {
  return (
    <ThemeProvider>
      <NewsContainer />
    </ThemeProvider>
  );
};
