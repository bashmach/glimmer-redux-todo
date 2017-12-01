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

import { createSelector } from 'reselect';

const initialState = {
  filter: undefined,
  isLoading: false,
  all: []
};

export default function todos(state, action) {
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
      return {
        ...state,
        all: state.all.map(todo => ({ ...todo, isCompleted: true }))
      }
    }

    case CLEAR_COMPLETED: {
      return {
        ...state,
        all: state.all.map(todo => ({ ...todo, isCompleted: false }))
      }
    }

    case DELETE_TODO: {
      return {
        ...state,
        all: state.all.filter(todo => todo.id !== action.id)
      }
    }

    case EDIT_TODO: {
      return {
        ...state,
        all: state.all.map(todo => {
          return todo.id === action.id ? {
            ...todo,
            text: action.text
          } : todo;
        })
      }
    }

    case COMPLETE_TODO: {
      return {
        ...state,
        all: state.all.map(todo => {
          return todo.id === action.id ? {
            ...todo,
            isCompleted: !todo.isCompleted
          } : todo;
        })
      }
    }

    case ADD_TODO: {
      const maxId = Math.max(...state.all.map(todo => todo.id)) || 0;

      let todo = {
        id: action.id || maxId + 1,
        isCompleted: action.isCompleted || false,
        text: action.text
      };

      return {
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
    return all.filter(todo => {
      return filter === undefined ? true : filter !== todo.isCompleted;
    });
  }
);

export const getAllTodosCount = createSelector(all, (all) => all.length);
export const getFilter = createSelector(filter, filter => filter);
export const getTodosCount = createSelector(getTodos, (todos) => todos.length);
export const getCompletedCount = createSelector(all, (all) => all.filter(t => t.isCompleted).length);
