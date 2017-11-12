import Component from '@glimmer/component';

export default class TodoListItem extends Component {
    args: {
        id: number;
        text: string;
        isCompleted: boolean;
        onToggle: (any) => void;
    };
};
