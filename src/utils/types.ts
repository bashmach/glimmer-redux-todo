export type Todo = {
    id?: number;
    text: string;
    isCompleted: boolean;
};

export type TodoAction = {
  id?: number;
  text: string;
  type: string;
};

export type AppState = {
  all: Todo[],
  isLoading: boolean
  filter?: string
};
