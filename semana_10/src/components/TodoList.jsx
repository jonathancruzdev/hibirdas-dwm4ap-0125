import React from 'react';
import TodoItem from './TodoItem';
const TodoList = ( props) => {
    console.log(props)
    return (
        <ul>
            <h2>Lista de Tareas</h2>
            { props.children }
        </ul>
    );
};

export default TodoList;