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
    FETCH,
    LOADING
} from './constants/ActionTypes';

export const addTodo = actionCreator<Todo>(ADD_TODO);
export const deleteTodo = actionCreator<Todo>(DELETE_TODO);
export const completeTodo = actionCreator<Todo>(COMPLETE_TODO);
export const completeAll = actionCreator<void>(COMPLETE_ALL);

export const fetchAll = actionCreator.async(FETCH_ALL);
export const loading = actionCreator.async(LOADING);

export const fetch = bindThunkAction(fetchAll, async (params, dispatch) => {
    dispatch(loading.started({}));

    await new Promise((resolve) => {
        setTimeout(() => {
            dispatch(loading.done({params: {}, result: {}}));

            resolve();
        }, 1000);
    });

    return {};
});