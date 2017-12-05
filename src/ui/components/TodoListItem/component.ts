import Component, { tracked } from '@glimmer/component';
import { ENTER, ESCAPE } from '../../../utils/constants/KeyCodes';

export default class TodoListItem extends Component {
  @tracked editing: boolean;
  @tracked args: {
    id: number;
    text: string;
    isCompleted: boolean;
    onToggle: (id: number) => void;
    onEdit: (id: number, text: string) => void;
  };

  updatedText: string;

  bounds: {
    firstNode: HTMLElement,
    lastNode: HTMLElement
  };

  constructor(options) {
    super(options);

    this.editing = false;
    this.updatedText = this.args.text;
  }

  onKeyUp(event) {
    if (event.keyCode === ENTER) {
      return this.submitEdit();
    }

    if (event.keyCode === ESCAPE) {
      return this.cancelEdit();
    }

    this.updatedText = event.currentTarget.value;
  }

  beginEdit() {
    this.editing = true;

    requestAnimationFrame(() => {
      let input = this.bounds.lastNode.querySelector('.edit') as HTMLInputElement;

      if (!input) {
        throw new Error('Input not found');
      }

      input.focus();
    });
  }

  cancelEdit() {
    this.editing = false;

    this.updatedText = this.text;
  }

  submitEdit() {
    this.editing = false;

    this.args.onEdit(this.args.id, this.updatedText);
  }

  @tracked('editing')
  get text() {
    if (this.editing) {
      return this.updatedText;
    }

    return this.args.text;
  }

  @tracked('editing')
  get isEditing() {
    return this.editing;
  }
};
