import Component, { tracked } from '@glimmer/component';

class ToggleAll extends Component {
  args: { allCompleted: boolean, onComplete: () => void, onClear: () => void };

  toggleAll() {
    if (this.isChecked) {
      return this.args.onClear();
    } else {
      return this.args.onComplete();
    }
  }

  @tracked('args')
  get isChecked() {
    return this.args.allCompleted;
  }
}

export default ToggleAll;
