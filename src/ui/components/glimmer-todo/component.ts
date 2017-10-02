import Component, { tracked } from '@glimmer/component';
import store from '../../../utils/store';

import { fetch } from '../../../utils/actions';

export default class GlimmerTodo extends Component {
    constructor(options: object) {
        super(options);

        store.dispatch(fetch({}));
    }
};
