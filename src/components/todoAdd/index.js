import React, { useState } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { createTodo } from '../../redux/actions';

const AddTodo = ({ onCreatePressed }) => {
    const [val, setVal] = useState('');

    return <div className="todo-add">
        <input className="todo-input" type="text" value={val} onChange={e => setVal(e.target.value)} />
        <button className="todo-btn" onClick={e => { onCreatePressed(val); setVal(''); }}>Create todo</button>
    </div>
}

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(null, mapDispatchToProps)(AddTodo);