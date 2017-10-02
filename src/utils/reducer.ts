import { Action } from 'redux-actions';
import { reducerWithoutInitialState } from "typescript-fsa-reducers";

import { AppState, Todo } from './todo';
import { addTodo, deleteTodo, completeTodo, completeAll, loading } from './actions';

const startLoadingHandler = (state: AppState): AppState => ({ ...state, isLoading: true });
const stopLoadingHandler = (state: AppState): AppState => ({ ...state, isLoading: false });

export default reducerWithoutInitialState()
    .case(loading.started, startLoadingHandler)
    .case(loading.done, stopLoadingHandler)
    .case(loading.failed, stopLoadingHandler)
    .case(addTodo, (state: AppState, text: string): AppState => {
        state.todos = [{
            id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            isDone: false,
            text: text
        }, ...state.todos];

        return { ...state };
    })
    .case(deleteTodo, (state: AppState, currentTodo: Todo): AppState => {
        state.todos = state.todos.filter(todo =>
            todo.id !== currentTodo.id
        );

        return { ...state };
    })
    .case(completeTodo, (state: AppState, currentTodo: Todo): AppState => {
        state.todos = state.todos.map(todo =>
            todo.id === currentTodo.id ?
                Object.assign({}, todo, { isDone: !todo.isDone }) :
                todo
        );

        return { ...state };
    })
    .case(completeAll, (state: AppState): AppState => {
        const areAllMarked = state.todos.every(todo => todo.isDone);

        state.todos = state.todos.map(todo => Object.assign({}, todo, {
            isDone: !areAllMarked
        }));

        return { ...state };
    })
    .build();