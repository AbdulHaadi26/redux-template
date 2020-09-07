import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { removeTodo } from '../../redux/actions';

const todoItem = ({ todo, onRemovePressed }) => <div className="todo-item">
    <h6>{todo.text}</h6>
    <div className="flex-row">
        <button className="btn-complete">Mark as Completed</button>
        <button className="btn-delete" onClick={e => onRemovePressed(todo.text)}>Delete</button>
    </div>
</div>

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text))
});

export default connect(null, mapDispatchToProps)(todoItem);