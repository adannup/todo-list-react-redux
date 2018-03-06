import { connect } from 'react-redux';
import { setVisibilityFilter } from './actions';
import FilterLink from './FilterLink';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterLink);

export default FilterLinkContainer;
