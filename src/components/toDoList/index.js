import React from 'react';
import TodoItem from '../todoItem';
import './style.css';

const TodoList = ({ todos }) =>  <div className="list-wrapper">
        {todos.map((todo, k) => <TodoItem todo={todo} key={k}/>)}
    </div>

export default TodoList;