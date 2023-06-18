import React from 'react';
import presetsTypes from '../../types/presetsTypes';
import Banner from '../presets/Banner';
import Heading from '../presets/Heading';
import Paragraph from '../presets/Paragraph';

export default {
  [presetsTypes.BANNER]: (props) => <Banner {...props} />,
  [presetsTypes.HEADING]: (props) => <Heading {...props} />,
  [presetsTypes.PARAGRAPH]: (props) => <Paragraph {...props} />,
};
