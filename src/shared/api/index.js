import articles from './articles';

export default ({ restClient }) => ({
  articles: articles(restClient),
});
