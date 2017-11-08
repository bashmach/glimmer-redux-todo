import Component, { tracked } from '@glimmer/component';

import { connect } from 'glimmer-redux';
import { getTodos, getFilter, getTodosCount } from '../../../reducers/todos';

const editTodo = (id, text) => dispatch => dispatch({type: 'EDIT_TODO', id, text});
const addTodo = text => dispatch => dispatch({type: 'ADD_TODO', text});
const deleteTodo = id => dispatch => dispatch({type: 'DELETE_TODO', id});
const completeTodo = id => dispatch => dispatch({type: 'COMPLETE_TODO', id});

const showAll = () => dispatch => dispatch({type: 'SHOW_ALL'});
const showActive = () => dispatch => dispatch({type: 'SHOW_ACTIVE'});
const showCompleted = () => dispatch => dispatch({type: 'SHOW_COMPLETED'});

class Layout extends Component {
    constructor(options: object) {
        super(options);
    }
}

const stateToComputed = state => ({
  todos: getTodos(state),
  filter: getFilter(state),
  todosCount: getTodosCount(state)
});

const dispatchToActions = {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  showAll,
  showActive,
  showCompleted
};

export default connect(stateToComputed, dispatchToActions)(Layout);
