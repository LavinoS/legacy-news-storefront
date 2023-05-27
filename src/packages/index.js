import { lazy } from 'react';

export { default as Header } from './header';
export { default as Footer } from './footer';

export const Homepage = lazy(() => import('./homepage'));
export const NotFoundPage = lazy(() => import('./not-found-page'));
