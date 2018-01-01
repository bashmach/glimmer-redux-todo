import Component, { tracked } from '@glimmer/component';

import { connect } from 'glimmer-redux';
import { fetch, filterTodos } from '../../../actions';

const dispatchToActions = {
  fetch,
  filterTodos
};

class Layout extends Component {
  @tracked filter: string;
}

const LayoutComponent = connect(null, dispatchToActions)(Layout);

export default LayoutComponent;
