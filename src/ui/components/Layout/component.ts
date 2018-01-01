import Component, { tracked } from '@glimmer/component';
import { connect } from 'glimmer-redux';
import Navigo from 'navigo';

import { fetch, filterTodos } from '../../../actions';

const dispatchToActions = {
  fetch,
  filterTodos
};

class Layout extends Component {
  @tracked filter: string;
  router: any;

  constructor(options) {
    super(options);

    this.router = new Navigo(null, true);
    this.router.resolve();
  }
}

const LayoutComponent = connect(null, dispatchToActions)(Layout);

export default LayoutComponent;
