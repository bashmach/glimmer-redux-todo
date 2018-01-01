import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
  FETCH_ALL,
  LOADING,
  FILTER
} from '../utils/constants/ActionTypes';

import { Todo, AppState } from '../utils/types';

import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../utils/constants/TodoFilters";

const initialState = <AppState>{
  filter: SHOW_ALL,
  isLoading: false,
  all: <Todo[]>[]
};

export default function todos(state: AppState, action) {
  switch (action.type) {
    case FETCH_ALL: {
      return {
        ...state,
        isLoading: false
      }
    }

    case LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }

    case FILTER: {
      let filter = SHOW_ALL;

      switch (action.filter) {
        case SHOW_ACTIVE:
        case SHOW_COMPLETED:
          filter = action.filter;
          break;
      }

      return {
        ...state,
        filter
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
      if (filter === SHOW_ALL) {
        return true;
      }

      if (filter === SHOW_ACTIVE) {
        return !todo.isCompleted;
      }

      if (filter === SHOW_COMPLETED) {
        return todo.isCompleted;
      }

      return false;
    });
  }
);

export const getAllTodosCount = createSelector(all, (all) => all.length);
export const getFilter = createSelector(filter, filter => filter);
export const getTodosCount = createSelector(getTodos, (todos) => todos.length);
export const getCompletedCount = createSelector(all, (all) => {
  return <number>all.filter(todo => todo.isCompleted).length;
});
