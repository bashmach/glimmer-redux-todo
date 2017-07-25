import Component, { tracked } from '@glimmer/component';
import createStore from '../../../utils/store';

export default class GlimmerTodo extends Component {
    store: any;

    constructor(options: object) {
        super(options);

        this.store = createStore();
    }
};
