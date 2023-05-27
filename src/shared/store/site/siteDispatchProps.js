import { receiveArticlesAction } from '../siteActions';

export const receiveArticlesMethod =
  (dispatch) =>
  ({ params, callback }) => {
    dispatch(receiveArticlesAction({ params, callback }));
  };
