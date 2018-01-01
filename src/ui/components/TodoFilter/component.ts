import Component, { tracked } from '@glimmer/component';
import { connect } from 'glimmer-redux';
import { getFilter, getTodosCount, getCompletedCount } from '../../../reducers/todos';
import { filterTodos } from '../../../actions';

class TodoFilter extends Component {}

const stateToComputed = state => ({
  filter: getFilter(state),
  itemsLeft: getTodosCount(state) - getCompletedCount(state)
});

const dispatchToActions = {
  filterTodos
};

export default connect(stateToComputed, dispatchToActions)(TodoFilter);