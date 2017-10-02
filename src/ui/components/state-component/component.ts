import Component, { tracked } from '@glimmer/component';
import store from '../../../utils/store';

export default class StateComponent extends Component {
    @tracked state;

    constructor(options: object) {
        super(options);

        this.state = store.getState();

        store.subscribe(() => {
            this.state = store.getState();
        });
    }
};
