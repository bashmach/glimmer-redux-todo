type Todo = {
    id?: number;
    text: string;
    isDone: boolean;
};

export default Todo;

export type IState = {
    todos: Todo[],
    isLoading: boolean
};