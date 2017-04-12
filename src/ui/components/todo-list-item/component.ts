import Component, { tracked } from '@glimmer/component';

export default class TodoListItem extends Component {
  args: {
    id: number;
    text: string;
    isDone: boolean;
    onToggle: (any) => void;
  };
};
