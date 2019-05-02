import React from 'react';

const ItemTodos = (props) => {

    const username = props.username;
    const {id, completed, title} = props.item;

    return (
        <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            <h5 className="mb-1">
                {completed ? <s>{title}</s> : title}
            </h5>
            <small>
                {username}
            </small>
        </li>);
};

export default ItemTodos;