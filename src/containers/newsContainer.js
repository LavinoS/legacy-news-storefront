import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import {
  EconomicsPage,
  ExternalPage,
  Footer,
  Header,
  Homepage,
  NotFoundPage,
  PoliticsPage,
  SingleNewsPage,
  SocialPage,
  SportPage,
} from '../packages';

export default (props) => {
  const { receiveArticlesMethod, makeNewViewMethod, state } = props;
  const { articles: { data = [] } = {} } = state;

  useEffect(() => {
    receiveArticlesMethod({ params: { limit: 999 } });
    makeNewViewMethod();
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
          <Route path="/sport" element={<SportPage {...injectedProps} />} />
          <Route
            path="/politics"
            element={<PoliticsPage {...injectedProps} />}
          />
          <Route path="/social" element={<SocialPage {...injectedProps} />} />
          <Route
            path="/external"
            element={<ExternalPage {...injectedProps} />}
          />
          <Route
            path="/economics"
            element={<EconomicsPage {...injectedProps} />}
          />
          {data.map((article, index) => {
            const { category, slug, status } = article;

            if (status !== 'published') {
              return;
            }

            return (
              <Route
                key={index}
                path={`/${category}/${slug}`}
                element={<SingleNewsPage {...article} />}
              />
            );
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
};
