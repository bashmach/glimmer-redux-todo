import Component, { tracked } from '@glimmer/component';
import { ENTER } from '../../../utils/constants/KeyCodes';

export default class TodoInput extends Component {
  @tracked args: { status, text: '', onSubmit, onKeyUp, onBlur };

  bounds: {
    firstNode: HTMLInputElement,
    lastNode: HTMLInputElement
  };

  get className() {
    if (this.args.status === 'new') {
      return 'new-todo';
    }

    if (this.args.status === 'edit') {
      return 'edit';
    }

    return null;
  }

  get placeholder() {
    if (this.args.status === 'new') {
      return 'What needs to be done?';
    }

    return null;
  }

  onKeyUp(event) {
    if (!this.args.onKeyUp) {
      return false;
    }

    this.args.onKeyUp(event);
  }

  onKeyPress(event) {
    if (event.keyCode !== ENTER) {
      return false;
    }

    requestAnimationFrame(() => {
      this.bounds.lastNode.value = '';
    });

    if (!this.args.onSubmit) {
      return false;
    }

    this.args.onSubmit(event.currentTarget.value.trim());
  }

  onBlur() {
    if (!this.args.onBlur) {
      return false;
    }

    this.args.onBlur();
  }
};
