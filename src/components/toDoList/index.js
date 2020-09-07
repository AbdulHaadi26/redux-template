import React from 'react';
import TodoItem from '../todoItem';
import './style.css';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => <div className="list-wrapper">
    {todos.map((todo, k) => <TodoItem todo={todo} key={k} />)}
</div>

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoList);