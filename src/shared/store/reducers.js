import { GET_ARTICLES } from './siteActionTypes';
import { combineReducers } from 'redux';

const appReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: action.data };

    default:
      return state;
  }
};

export default combineReducers({ app: appReducer });
