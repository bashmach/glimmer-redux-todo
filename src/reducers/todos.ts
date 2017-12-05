import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
  FETCH_ALL,
  LOADING
} from '../utils/constants/ActionTypes';

import { Todo, AppState } from '../utils/types';

import { createSelector } from 'reselect';
import App from "../main";

const initialState = <AppState>{
  filter: undefined,
  isLoading: false,
  all: <Todo[]>[]
};

export default function todos(state: AppState, action) {
  switch (action.type) {
    case FETCH_ALL: {
      return {
        isLoading: false,
        ...state
      }
    }

    case LOADING: {
      return {
        isLoading: true,
        ...state
      }
    }

    case COMPLETE_ALL: {
      return <AppState>{
        ...state,
        all: state.all.map((todo: Todo) => (<Todo>{ ...todo, isCompleted: true }))
      }
    }

    case CLEAR_COMPLETED: {
      return <AppState>{
        ...state,
        all: state.all.map((todo: Todo) => (<Todo>{ ...todo, isCompleted: false }))
      }
    }

    case DELETE_TODO: {
      return <AppState>{
        ...state,
        all: state.all.filter((todo: Todo) => todo.id !== action.id)
      }
    }

    case EDIT_TODO: {
      const id = action.id + 0;

      return <AppState>{
        ...state,
        all: state.all.map((todo: Todo) => {
          return todo.id === action.id ? <Todo>{
            ...todo,
            text: action.text
          } : todo;
        })
      }
    }

    case COMPLETE_TODO: {
      return <AppState>{
        ...state,
        all: state.all.map((todo: Todo) => {
          return todo.id === action.id ? <Todo>{
            ...todo,
            isCompleted: !todo.isCompleted
          } : todo;
        })
      }
    }

    case ADD_TODO: {
      let maxId = 0;

      if (state.all.length > 0) {
          maxId = Math.max(...state.all.map(todo => todo.id));
      }

      let todo = <Todo>{
        id: action.id || maxId + 1,
        isCompleted: action.isCompleted || false,
        text: action.text
      };

      return <AppState>{
        ...state,
        all: [...state.all, todo]
      }
    }

    default: {
      return state || initialState;
    }
  }
}

const all = state => state.todos.all;
const filter = state => state.todos.filter;

export const getTodos = createSelector(
  all,
  filter,
  (all, filter) => {
    return <Todo[]>all.filter(todo => {
      return filter === undefined ? true : filter !== todo.isCompleted;
    });
  }
);

export const getAllTodosCount = createSelector(all, (all) => all.length);
export const getFilter = createSelector(filter, filter => filter);
export const getTodosCount = createSelector(getTodos, (todos) => todos.length);
export const getCompletedCount = createSelector(all, (all) => {
  return <number>all.filter(todo => todo.isCompleted).length;
});
