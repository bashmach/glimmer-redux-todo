import Component, { tracked } from '@glimmer/component';

export default class TodoListItem extends Component {
  args: { item };

  @tracked item: { text: string, isDone: boolean };

  constructor(options) {
    super(options);

    this.item = this.args.item;
  }

  @tracked('item')
  get status() {
    return this.item.isDone ? 'done': 'todo';
  }

  @tracked('status')
  get className() {
    let className = 'view';

    if (this.status == "done") {
      className = `${className} completed`;
    }

    return className;
  }
};
