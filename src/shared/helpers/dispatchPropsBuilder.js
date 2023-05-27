const dispatchPropsBuilder = (props) => (dispatch, ownProps) => {
  return Object.fromEntries(
    Object.entries(props).map(([propName, propDispatchBuilder]) => {
      return [propName, propDispatchBuilder(dispatch, ownProps)];
    }),
  );
};

export default dispatchPropsBuilder;
