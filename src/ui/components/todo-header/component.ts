import { tracked } from '@glimmer/component';
import StateComponent from '../state-component/component';

export default class TodoHeader extends StateComponent {
    @tracked('state')
    get counter() {
        return this.state.todos.length;
    }
};
