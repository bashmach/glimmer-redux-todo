export const addTodo = text => dispatch => dispatch({type: 'ADD_TODO', text});
export const editTodo = (id, text) => dispatch => dispatch({type: 'EDIT_TODO', id, text});
export const deleteTodo = id => dispatch => dispatch({type: 'DELETE_TODO', id});
export const completeTodo = id => dispatch => dispatch({type: 'COMPLETE_TODO', id});
export const completeAll = () => dispatch => dispatch({type: 'COMPLETE_ALL'});

export const showAll = () => dispatch => dispatch({type: 'SHOW_ALL'});
export const showActive = () => dispatch => dispatch({type: 'SHOW_ACTIVE'});
export const showCompleted = () => dispatch => dispatch({type: 'SHOW_COMPLETED'});

export const fetch = () => async (dispatch) => {
  dispatch({type: 'LOADING'});

  const todos = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, isCompleted: true, text: 'Build example todo app' },
        { id: 2, text: 'Try Glimmer' },
        { id: 3, text: 'Learn TypeScript' }
      ]);
    }, 1000);
  });

  todos.map(todo => dispatch({type: 'ADD_TODO', ...todo}));

  return dispatch({type: 'FETCH_ALL'});
};

export default {};
