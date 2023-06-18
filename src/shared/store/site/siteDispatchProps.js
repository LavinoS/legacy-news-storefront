import { makeNewViewAction, receiveArticlesAction } from '../siteActions';

export const receiveArticlesMethod =
  (dispatch) =>
  ({ params }) => {
    dispatch(receiveArticlesAction({ params }));
  };

export const makeNewViewMethod = (dispatch) => () => {
  dispatch(makeNewViewAction());
};
