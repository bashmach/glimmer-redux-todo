import Component, { tracked } from '@glimmer/component';
import store from '../../../utils/store';

import { addTodo } from '../../../utils/actions';
import Todo from "../../../utils/todo";

export default class GlimmerTodo extends Component {
    state: Todo[];

    constructor(options: object) {
        super(options);

        store.subscribe(() => {
            this.state = store.getState();
        });

        ["Learn TypeScript", "Try Glimmer", "Build example todo app"].map(item => {
            return store.dispatch(addTodo(item));
        });
    }
};
