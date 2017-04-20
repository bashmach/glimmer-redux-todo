import Component, { tracked } from '@glimmer/component';

export default class TodoInput extends Component {
  @tracked args: { status, onSubmit };
  @tracked status: string;
  onSubmit: any;

  constructor(options) {
    super(options);

    this.status = this.args.status || 'default';
    this.onSubmit = this.args.onSubmit || (() => {});
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

  onKeyPress(event) {
    // submit only on `enter` keypress
    if (event.charCode !== 13) {
      return false;
    }

    const value = event.currentTarget.value.trim();

    this.onSubmit(value);

    event.currentTarget.value = '';
  }
};
