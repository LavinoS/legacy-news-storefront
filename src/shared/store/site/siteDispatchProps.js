import { receiveArticlesAction } from '../siteActions';

export const receiveArticlesMethod =
  (dispatch) =>
  ({ params }) => {
    dispatch(receiveArticlesAction({ params }));
  };
