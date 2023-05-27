import { connect } from 'react-redux';

import newsContainer from '../../containers/newsContainer';
import dispatchPropsBuilder from '../helpers/dispatchPropsBuilder';

import { receiveArticlesMethod } from '../store/site/siteDispatchProps';

const mapStateToProps = (state) => ({
  state: state.app,
});

const mapDispatchToProps = dispatchPropsBuilder({
  receiveArticlesMethod,
});

export default connect(mapStateToProps, mapDispatchToProps)(newsContainer);
