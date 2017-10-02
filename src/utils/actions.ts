import { createAction, Action } from 'redux-actions';
import actionCreatorFactory from 'typescript-fsa';
import { bindThunkAction } from 'typescript-fsa-redux-thunk';

const actionCreator = actionCreatorFactory();

import Todo from './todo';

import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL,
    CLEAR_COMPLETED,
    FETCH_ALL,
    LOADING
} from './constants/ActionTypes';

export const addTodo = actionCreator<string>(ADD_TODO);
export const deleteTodo = actionCreator<Todo>(DELETE_TODO);
export const completeTodo = actionCreator<Todo>(COMPLETE_TODO);
export const completeAll = actionCreator(COMPLETE_ALL);

export const fetchAll = actionCreator.async(FETCH_ALL);
export const loading = actionCreator.async(LOADING);

export const fetch = bindThunkAction(fetchAll, async (params, dispatch) => {
    dispatch(loading.started({}));

    await new Promise((resolve) => {
        setTimeout(() => {
            const todos = ['Build example todo app', 'Try Glimmer', 'Learn TypeScript'];

            todos.map(text => dispatch(addTodo(text)));

            resolve();
        }, 1000);
    });

    return {};
});