import Component, { tracked } from '@glimmer/component';
import store from '../../../utils/store';
import { IState } from "../../../utils/todo";

export default class StateComponent extends Component {
    @tracked state: IState;

    constructor(options: object) {
        super(options);

        this.state = store.getState();

        store.subscribe(() => {
            this.state = store.getState();
        });
    }
};
