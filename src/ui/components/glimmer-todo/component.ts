import Component, { tracked } from '@glimmer/component';
import store from '../../../utils/store';

import { fetch, loading } from '../../../utils/actions';
import { IState } from "../../../utils/todo";

export default class GlimmerTodo extends Component {
    state: IState;

    constructor(options: object) {
        super(options);

        store.subscribe(() => {
            this.state = store.getState();
        });

        store.dispatch(fetch({}));
    }
};
