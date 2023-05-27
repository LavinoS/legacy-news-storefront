import { clientApi as api } from '../../client/clientApi';

export const receiveArticlesAction =
  ({ params, callback }) =>
  async () => {
    const { json, status } = await api.articles.receive(params);

    if (callback && typeof callback === 'function' && status === 200) {
      callback(json);
    }
  };
