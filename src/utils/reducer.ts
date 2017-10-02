
import { Action } from 'redux-actions';

import { reducerWithInitialState } from "typescript-fsa-reducers";

import { IState } from './todo';

import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, FETCH_ALL } from './constants/ActionTypes';
import { fetchAll, loading } from './actions';

const initialState: IState = {
    todos: [],
    isLoading: false
};

const startLoadingHandler = (state: IState) : IState => ({ ...state, isLoading: true });
const stopLoadingHandler = (state: IState) : IState => ({ ...state, isLoading: false });

export default reducerWithInitialState(initialState)
    .case(loading.started, startLoadingHandler)
    .case(loading.done, stopLoadingHandler)
    .case(loading.failed, stopLoadingHandler)
    .build();