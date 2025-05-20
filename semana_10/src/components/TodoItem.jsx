import React from 'react';

const TodoItem = ( {title, completed}) => {
    return (
        <li>
            <span>{ title} <input type="checkbox" /> </span>
        </li>
    );
};

export default TodoItem;