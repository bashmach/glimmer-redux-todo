import Component, { tracked } from '@glimmer/component';

export default class TodoInput extends Component {
  @tracked args: { status };
  @tracked status: string;

  constructor(options) {
    super(options);

    this.status = this.args.status || 'default';
  }

  @tracked('status')
  get placeholder() {
    if (this.status === 'new') {
      return 'What needs to be done?';
    }

    return null;
  }

  @tracked('status')
  get className() {
    if (this.status === 'new') {
      return 'new-todo';
    }

    if (this.status === 'edit') {
      return 'edit';
    }

    return null;
  }
};
