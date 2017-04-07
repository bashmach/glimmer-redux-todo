import Component, { tracked } from '@glimmer/component';

export default class TodoInput extends Component {
  className: string;
  placeholder: string;

  @tracked status: string;

  constructor(options) {
    super(options);

    this.status = this.args.status || 'default';

    this.className = this.getClassNameBindings();
    this.placeholder = this.getPlaceholder();
  }

  didUpdate() {
    this.className = this.getClassNameBindings();
    this.placeholder = this.getPlaceholder();
  }

  getPlaceholder() {
    if (this.status === 'new') {
      return 'What needs to be done?';
    }

    return null;
  }

  getClassNameBindings() {
    if (this.status === 'new') {
      return 'new-todo';
    }

    if (this.status === 'edit') {
      return 'edit';
    }

    return null;
  }
};
