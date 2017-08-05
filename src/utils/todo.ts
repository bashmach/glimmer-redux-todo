import { tracked } from "@glimmer/component";

type Todo = {
    id?: number;
    text: string;
    isDone: boolean;
};

export default Todo;

export type IState = Todo[];