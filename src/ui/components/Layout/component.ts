import Component from '@glimmer/component';

class Layout extends Component {}

import { connect } from 'glimmer-redux';
import { getTodos, getFilter, getTodosCount } from '../../../reducers/todos';
import { fetch } from '../../../actions';

const stateToComputed = state => ({
  todos: getTodos(state),
  filter: getFilter(state),
  todosCount: getTodosCount(state)
});

const dispatchToActions = {
  fetch
};

export default connect(stateToComputed, dispatchToActions)(Layout);
