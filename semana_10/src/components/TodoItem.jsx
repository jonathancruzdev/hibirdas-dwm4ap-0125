import React from 'react';

const TodoItem = ( {title, completed, cambiar}) => {

    function handlerClick(){
        console.log(`Click de la tarea ${title} `);
        cambiar(title);
    }

    return (
        <li>
            <span>{ title} <input onClick={ handlerClick } type="checkbox" /> </span>
        </li>
    );
};

export default TodoItem;