import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default ({ message }) => {
  toast(message);

  //TODO: FINISH THIS COMPONENT

  return <Toaster position="top-right" />;
};
