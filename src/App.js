import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './components/toDoList';
import './App.css';

var list = [{ text: 'Need break' }, { text: 'Item2' }, { text: 'Item3' }];

const App = () => <div className="App">
    <TodoList todos={list} />
</div>

export default hot(module)(App);