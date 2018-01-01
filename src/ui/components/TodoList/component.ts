import Component, { tracked } from '@glimmer/component';
import { connect } from 'glimmer-redux';
import Navigo from 'navigo';

import { getTodos, getTodosCount, getCompletedCount } from '../../../reducers/todos';
import {
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
  completeAll,
  clearCompleted
} from '../../../actions';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../../../utils/constants/TodoFilters";

const router = new Navigo(null, true);

class TodoList extends Component {
  onFilter: (filterType: string) => void;

  constructor(options: object) {
    super(options);

    this.args.onLoad();

    this.onFilter = this.args.onFilter.bind(this);

    router
      .on('/', () => {
        this.onFilter(SHOW_ALL);
      })
      .on('/:filter', (params) => {
        switch (params.filter) {
          case 'active':
            this.onFilter(SHOW_ACTIVE);
            break;
          case 'completed':
            this.onFilter(SHOW_COMPLETED);
            break;
          default:
            this.onFilter(SHOW_ALL);
            break;
        }
      })
      .resolve();
  }
}

const stateToComputed = state => ({
  todos: getTodos(state),
  allCompleted: getTodosCount(state) - getCompletedCount(state) === 0
});

const dispatchToActions = {
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
  completeAll,
  clearCompleted
};

export default connect(stateToComputed, dispatchToActions)(TodoList);
