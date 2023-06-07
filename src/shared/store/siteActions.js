import { clientApi as api } from '../../client/clientApi';
import { receiveArticles } from './siteMutations';

export const receiveArticlesAction =
  ({ params }) =>
  async (dispatch) => {
    const { json, status } = await api.articles.receive(params);

    if (status === 200) {
      dispatch(receiveArticles(json));
    }
  };
