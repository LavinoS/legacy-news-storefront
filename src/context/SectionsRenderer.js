import React, { createContext } from 'react';
import presetsProvider from '../providers/factory/presetsProvider';

export default createContext(({ type, ...otherProps }) => {
  const Renderer = presetsProvider[type];

  if (!Renderer) {
    console.warn(`ComponentFactory: No component found for type "${type}"`);
    return null;
  }

  return <Renderer {...otherProps} />;
});
