import { createStore, compose } from 'redux';

import reducer from './reducer';

const initialState = 0;

const store = createStore(
    reducer,
    initialState,
    compose()
);

export default store;