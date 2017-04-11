import Component, { tracked } from '@glimmer/component';

export default class TodoList extends Component {
  items: { text: string, isDone: boolean }[];

  constructor(options) {
    super(options);

    this.items = [
      {
        text: "Learn TypeScript",
        isDone: false,
      },
      {
        text: "Try Glimmer",
        isDone: false,
      },
      {
        text: "Build example todo app",
        isDone: false,
      }
    ];
  }
};
