import { createStore, compose } from 'redux';

import reducer from './reducer';

const initialState = 0;

export default () => {
    const store = createStore(
        reducer,
        initialState,
        compose()
    );

    return store;
}