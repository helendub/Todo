import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


const TodoItemContainer = ({todoItem: {isCompleted, text}, toggleCompletedHandler}) => {

    return <TodoItem
        isCompleted={isCompleted}
        text={text}
        toggleCompletedHandler={toggleCompletedHandler}

    />
}


TodoItemContainer.propTypes = {
    todoItem: PropTypes.object.isRequired,
};

export default TodoItemContainer;