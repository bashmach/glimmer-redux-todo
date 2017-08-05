import { createAction, Action } from 'redux-actions';

import Todo from './todo';

import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL,
    CLEAR_COMPLETED
} from './constants/ActionTypes';

export const addTodo = createAction<Todo, string>(
    ADD_TODO,
    (text: string) => ({ text, isDone: false })
);

export const deleteTodo = createAction<Todo, Todo>(
    DELETE_TODO,
    (todo: Todo) => todo
);

export const completeTodo = createAction<Todo, Todo>(
    COMPLETE_TODO,
    (todo: Todo) => todo
);

export const completeAll = createAction<void>(
    COMPLETE_ALL,
    () => { }
);

export default {};