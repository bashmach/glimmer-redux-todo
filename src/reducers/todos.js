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

import omit from 'lodash-es/omit';
import omitBy from 'lodash-es/omitBy';
import mapValues from 'lodash-es/mapValues';
import defaults from 'lodash-es/defaults';
import values from 'lodash-es/values';
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
      let todos = omitBy(state.all, todo => todo.isCompleted === true);
      return {
        ...state,
        all: todos
      }
    }

    case CLEAR_COMPLETED: {
      let todos = omitBy(state.all, todo => todo.isCompleted === true);
      return {
        ...state,
        all: todos
      }
    }

    case DELETE_TODO: {
      let todos = omitBy(state.all, todo => todo.id === action.id);

      return {
        ...state,
        all: todos
      }
    }

    case EDIT_TODO: {
      let todos = mapValues(state.all, todo => {
        return todo.id === action.id ? defaults({
          text: action.text
        }, todo) : todo;
      });
      return {
        ...state,
        all: {...state.all, ...todos}
      }
    }

    case COMPLETE_TODO: {
      let todos = mapValues(state.all, todo => {
        return todo.id === action.id ? defaults({
          isCompleted: !todo.isCompleted
        }, todo) : todo;
      });

      return {
        ...state,
        all: {...state.all, ...todos}
      }
    }

    case ADD_TODO: {
      const id = Object.values(state.all).reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      let todo = {
        [id]: {
          id: action.id || id,
          isCompleted: action.isCompleted || false,
          text: action.text
        }
      };

      return {
        ...state,
        all: {...state.all, ...todo}
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
    return omitBy(all, todo => {
      return filter === undefined ? false : filter !== todo.isCompleted;
    });
  }
);

export const getAllTodosCount = createSelector(all, (all) => values(all).length);
export const getFilter = createSelector(filter, filter => filter);
export const getTodosCount = createSelector(getTodos, (todos) => values(todos).length);
export const getCompletedCount = createSelector(all, (all) => values(all).filter(t => t.isCompleted).length);
