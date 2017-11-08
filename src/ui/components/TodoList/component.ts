import Component from '@glimmer/component';
import { connect } from 'glimmer-redux';
import { getTodos, getTodosCount } from '../../../reducers/todos';

const addTodo = text => dispatch => dispatch({type: 'ADD_TODO', text});
const deleteTodo = id => dispatch => dispatch({type: 'DELETE_TODO', id});
const completeTodo = id => dispatch => dispatch({type: 'COMPLETE_TODO', id});
const completeAll = () => dispatch => dispatch({type: 'COMPLETE_ALL'});

class TodoList extends Component {

};

const stateToComputed = state => ({
  todos: getTodos(state)
});


const dispatchToActions = {
  addTodo,
  deleteTodo,
  completeTodo,
  completeAll
};

export default connect(stateToComputed, dispatchToActions)(TodoList);
