import Component, { tracked } from '@glimmer/component';

export default class TodoHeader extends Component {
    args: {
        store: any
    };

    @tracked
    state: number = 0;

    constructor(options: object) {
        super(options);

        this.args.store.subscribe(() => {
            this.state = this.args.store.getState();
        });
    }

    @tracked('state')
    get counter() {
        return this.state;
    }
};
