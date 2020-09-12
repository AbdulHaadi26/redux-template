import { loadTodosInProgress, loadTodosSuccess, loadTodosFail } from "."

export const loadTodos = () => async (dispatch, getState) => {
    dispatch(loadTodosInProgress());
    try {
        const res = await fetch('http://localhost:8000/todos');
        const todos = await res.json();
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFail());
    }

}