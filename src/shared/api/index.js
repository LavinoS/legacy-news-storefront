import articles from './articles';
import views from './views';

export default ({ restClient }) => ({
  articles: articles(restClient),
  views: views(restClient),
});
