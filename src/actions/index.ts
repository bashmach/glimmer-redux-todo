import {
  ADD_TODO, CLEAR_COMPLETED, COMPLETE_ALL, COMPLETE_TODO, DELETE_TODO,
  EDIT_TODO, FETCH_ALL, LOADING
} from "../utils/constants/ActionTypes";
import { Todo, TodoAction } from "../utils/types";
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from "../utils/constants/TodoFilters";

export const addTodo = (text: string) => dispatch => dispatch(<TodoAction>{ type: ADD_TODO, text });
export const editTodo = (id: number, text: string) => dispatch => dispatch(<TodoAction>{ type: EDIT_TODO, id, text });
export const deleteTodo = (id: number) => dispatch => dispatch(<TodoAction>{ type: DELETE_TODO, id });
export const completeTodo = (id: number) => dispatch => dispatch(<TodoAction>{ type: COMPLETE_TODO, id });
export const completeAll = () => dispatch => dispatch(<TodoAction>{ type: COMPLETE_ALL });
export const clearCompleted = () => dispatch => dispatch(<TodoAction>{ type: CLEAR_COMPLETED });

export const showAll = () => dispatch => dispatch(<TodoAction>{ type: SHOW_ALL });
export const showActive = () => dispatch => dispatch(<TodoAction>{ type: SHOW_ACTIVE });
export const showCompleted = () => dispatch => dispatch(<TodoAction>{ type: SHOW_COMPLETED });

export const fetch = () => async (dispatch) => {
  dispatch(<TodoAction>{ type: LOADING });

  const todos = await new Promise<Todo[]>(resolve => {
    setTimeout(() => {
      resolve([
        { text: 'Build example todo app', isCompleted: true },
        { text: 'Try Glimmer', isCompleted: true },
        { text: 'Learn TypeScript', isCompleted: false }
      ]);
    }, 1000);
  });

  todos.map(todo => dispatch(<TodoAction>{ type: 'ADD_TODO', ...todo }));

  return dispatch(<TodoAction>{ type: FETCH_ALL });
};

export default {};
