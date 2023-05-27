import { merge } from 'lodash';

const mergeStyles = (initialObject, incomingObject) => {
  if (typeof initialObject !== 'object' || typeof incomingObject !== 'object') {
    return null;
  }

  return merge({}, initialObject, incomingObject);
};

export default mergeStyles;
