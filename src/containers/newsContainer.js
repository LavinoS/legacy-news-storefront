import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import { Footer, Header, Homepage, NotFoundPage } from '../packages';

export default (props) => {
  const { receiveArticlesMethod, state } = props;
  const { articles: { data = [] } = {} } = state;

  useEffect(() => {
    receiveArticlesMethod({ params: { limit: 999 } });
  }, []);

  const injectedProps = {
    receiveArticlesMethod,
    articles: data,
  };

  return (
    <Suspense fallback={<></>}>
      <Header {...injectedProps} />
      <main>
        <Routes>
          <Route path="/" element={<Homepage {...injectedProps} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
};
