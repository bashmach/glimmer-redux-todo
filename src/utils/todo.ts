export type Todo = {
    id?: number;
    text: string;
    isDone: boolean;
};

export default Todo;

export type AppState = {
    todos: Todo[],
    isLoading: boolean
};