import Component from '@glimmer/component';

class Layout extends Component {}


import { connect } from 'glimmer-redux';
import { getTodos, getFilter, getTodosCount } from '../../../reducers/todos';

const load = () => async (dispatch) => {
  dispatch({type: 'LOADING'});

  const todos = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Build example todo app', 'Try Glimmer', 'Learn TypeScript']);
    }, 1000);
  });

  todos.map(text => dispatch({type: 'ADD_TODO', text}));

  return dispatch({type: 'FETCH_ALL'});
};

const stateToComputed = state => ({
  todos: getTodos(state),
  filter: getFilter(state),
  todosCount: getTodosCount(state)
});

const dispatchToActions = {
  load
};

export default connect(stateToComputed, dispatchToActions)(Layout);
