import { tracked } from '@glimmer/component';
import StateComponent from '../state-component/component';
import store from '../../../utils/store';

import { addTodo, deleteTodo, completeTodo, completeAll } from '../../../utils/actions';

export default class TodoList extends StateComponent {
  onToggle (todo) {
    return store.dispatch(completeTodo(todo));
  };

  onToggleAll(e) {
    return store.dispatch(completeAll());
  }

  onDestroy(todo) {
    return store.dispatch(deleteTodo(todo));
  }

  addItem(text) {
    return store.dispatch(addTodo(text));
  }

  @tracked('state')
  get items() {
    return this.state;
  }
};
