import Component from '@glimmer/component';
import { connect } from 'glimmer-redux';
import { getTodosCount } from '../../../reducers/todos';

class TodoHeader extends Component {

}

const stateToComputed = state => ({
  counter: getTodosCount(state)
});

export default connect(stateToComputed)(TodoHeader);
