import Component, { tracked } from '@glimmer/component';
import { connect } from 'glimmer-redux';
import { getTodosCount, getCompletedCount } from '../../../reducers/todos';

class TodoFilter extends Component {
  @tracked('args')
  get filter() {
    return this.args.filter;
  }
}

const stateToComputed = state => ({
  itemsLeft: getTodosCount(state) - getCompletedCount(state)
});

const dispatchToActions = {};

export default connect(stateToComputed, dispatchToActions)(TodoFilter);