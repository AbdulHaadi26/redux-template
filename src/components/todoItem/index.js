import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { removeTodo, markCompleteTodo } from '../../redux/actions';

const todoItem = ({ todo, onRemovePressed, onMarkComplete }) => <div className={`todo-item ${todo.isCompleted ? 'todo-complete' : ''}`}>
    <h6>{todo.text}</h6>
    <div className={`flex-row`}>
        {!todo.isCompleted && <button className="btn-complete" onClick={e => onMarkComplete(todo.text)}>Mark as Completed</button>}
        <button className="btn-delete" onClick={e => onRemovePressed(todo.text)}>Delete</button>
    </div>
</div>

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkComplete: text => dispatch(markCompleteTodo(text))
});

export default connect(null, mapDispatchToProps)(todoItem);