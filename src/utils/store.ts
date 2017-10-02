import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import reducer from './reducer';

import { AppState } from './todo';

const initialState: AppState = {
    todos: [],
    isLoading: false
};

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

export default store;