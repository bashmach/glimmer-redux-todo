import Component, { tracked } from '@glimmer/component';
import store from '../../../utils/store';

export default class TodoHeader extends Component {
    @tracked
    state: number = 0;

    constructor(options: object) {
        super(options);

        store.subscribe(() => {
            this.state = store.getState();
        });
    }

    @tracked('state')
    get counter() {
        return this.state;
    }
};
