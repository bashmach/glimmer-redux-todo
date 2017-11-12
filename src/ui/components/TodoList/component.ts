import Component from '@glimmer/component';
import { connect } from 'glimmer-redux';
import { getTodos, getFilter, getTodosCount } from '../../../reducers/todos';
import { addTodo,
  deleteTodo,
  completeTodo,
  completeAll
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
  todosCount: getTodosCount(state)
});

const dispatchToActions = {
  addTodo,
  deleteTodo,
  completeTodo,
  completeAll
};

export default connect(stateToComputed, dispatchToActions)(TodoList);
