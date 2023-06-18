import { lazy } from 'react';

export { default as Header } from './header';
export { default as Footer } from './footer';

export const Homepage = lazy(() => import('./homepage'));
export const NotFoundPage = lazy(() => import('./not-found-page'));
export const SportPage = lazy(() => import('./sport-page'));
export const PoliticsPage = lazy(() => import('./politics-page'));
export const SocialPage = lazy(() => import('./social-page'));
export const ExternalPage = lazy(() => import('./external-page'));
export const EconomicsPage = lazy(() => import('./economics-page'));
export const SingleNewsPage = lazy(() => import('./single-news-page'));
