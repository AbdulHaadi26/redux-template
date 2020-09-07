import React from 'react';
import './style.css';

const todoItem = ({ todo, k }) => <div className="todo-item">
    <h6>{todo.text}</h6>
    <div className="flex-row">
        <button className="btn-complete">Mark as Completed</button>
        <button className="btn-delete">Delete</button>
    </div>
</div>

export default todoItem;