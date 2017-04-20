import Component, { tracked } from '@glimmer/component';

export default class TodoList extends Component {
  @tracked items: { id: number, text: string, isDone: boolean }[];

  constructor(options) {
    super(options);

    this.items = [
      {
        id: 1,
        text: "Learn TypeScript",
        isDone: false,
      },
      {
        id: 2,
        text: "Try Glimmer",
        isDone: false,
      },
      {
        id: 3,
        text: "Build example todo app",
        isDone: false,
      }
    ];
  }

  onToggle ({ id }) {
    this.items = this.items.map(item => ({
      ...item,
      isDone: item.id === id ? !item.isDone : item.isDone
    }));
  };

  onToggleAll(e) {
    this.items = this.items.map(item => ({
      ...item,
      isDone: e.currentTarget.checked
    }));
  }

  onDestroy({ id }) {
    this.items = this.items.filter(item => item.id !== id);
  }

  addItem(text) {
    const { id: lastItemId } = [...this.items].pop();

    this.items = [
      ...this.items,
      {
        id: lastItemId + 1,
        text,
        isDone: false
      }
    ]
  }
};
