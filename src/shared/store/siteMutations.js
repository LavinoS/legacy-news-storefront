import { GET_ARTICLES } from './siteActionTypes';

export const receiveArticles = (data) => ({
  type: GET_ARTICLES,
  data,
});
