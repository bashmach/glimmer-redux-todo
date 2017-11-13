import Component from '@glimmer/component';
import { connect } from 'glimmer-redux';
import { getTodos, getFilter, getTodosCount, getCompletedCount } from '../../../reducers/todos';
import { addTodo,
  deleteTodo,
  completeTodo,
  completeAll,
  clearCompleted
} from '../../../actions';

class TodoList extends Component {
  constructor(options: object) {
    super(options);

    this.args.onLoad();
  }
}

const stateToComputed = state => ({
  todos: getTodos(state),
  filter: getFilter(state),
  allCompleted: getTodosCount(state) - getCompletedCount(state) === 0
});

const dispatchToActions = {
  addTodo,
  deleteTodo,
  completeTodo,
  completeAll,
  clearCompleted
};

export default connect(stateToComputed, dispatchToActions)(TodoList);
