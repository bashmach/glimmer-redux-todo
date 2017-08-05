import { createStore, compose } from 'redux';

import reducer from './reducer';
import { IState } from './todo';

const initialState: IState = [];

const store = createStore(
    reducer,
    initialState,
    compose()
);

export default store;