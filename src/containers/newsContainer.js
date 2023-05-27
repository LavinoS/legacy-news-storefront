import React, { Suspense } from 'react';
import { Footer, Header, Homepage, NotFoundPage } from '../packages';
import { Route, Routes } from 'react-router';

export default (props) => {
  const { receiveArticlesMethod } = props;

  const injectedProps = {
    receiveArticlesMethod,
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
