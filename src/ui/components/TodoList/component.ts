import Component from '@glimmer/component';
import { connect } from 'glimmer-redux';
import { getTodos, getFilter, getTodosCount } from '../../../reducers/todos';

class TodoList extends Component {
  constructor(options: object) {
    super(options);

    this.args.onLoad();
  }
};

const editTodo = (id, text) => dispatch => dispatch({type: 'EDIT_TODO', id, text});
const addTodo = text => dispatch => dispatch({type: 'ADD_TODO', text});
const deleteTodo = id => dispatch => dispatch({type: 'DELETE_TODO', id});
const completeTodo = id => dispatch => dispatch({type: 'COMPLETE_TODO', id});
const completeAll = () => dispatch => dispatch({type: 'COMPLETE_ALL'});

const showAll = () => dispatch => dispatch({type: 'SHOW_ALL'});
const showActive = () => dispatch => dispatch({type: 'SHOW_ACTIVE'});
const showCompleted = () => dispatch => dispatch({type: 'SHOW_COMPLETED'});

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
  completeAll,
  showAll,
  showActive,
  showCompleted
};

export default connect(stateToComputed, dispatchToActions)(TodoList);
