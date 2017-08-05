import { handleActions, Action } from 'redux-actions';

import Todo, { IState } from './todo';
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL } from './constants/ActionTypes';

export default handleActions<IState, Todo>({
    [ADD_TODO]: (state:IState, action:Action<Todo>):IState => {
        return [{
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            isDone: action.payload.isDone,
            text: action.payload.text
        }, ...state];
    },

    [DELETE_TODO]: (state: IState, action: Action<Todo>): IState => {
        return state.filter(todo =>
            todo.id !== action.payload.id
        );
    },

    [COMPLETE_TODO]: (state: IState, action: Action<Todo>): IState => {
        return <IState>state.map(todo =>
            todo.id === action.payload.id ?
                Object.assign({}, todo, { isDone: !todo.isDone }) :
                todo
        );
    },

    [COMPLETE_ALL]: (state: IState, action: Action<Todo>): IState => {
        const areAllMarked = state.every(todo => todo.isDone);
        return <IState>state.map(todo => Object.assign({}, todo, {
            isDone: !areAllMarked
        }));
    },
}, []);