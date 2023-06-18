import { connect } from 'react-redux';

import newsContainer from '../../containers/newsContainer';
import dispatchPropsBuilder from '../helpers/dispatchPropsBuilder';

import {
  makeNewViewMethod,
  receiveArticlesMethod,
} from '../store/site/siteDispatchProps';

const mapStateToProps = (state) => ({
  state: state.app,
});

const mapDispatchToProps = dispatchPropsBuilder({
  receiveArticlesMethod,
  makeNewViewMethod,
});

export default connect(mapStateToProps, mapDispatchToProps)(newsContainer);
