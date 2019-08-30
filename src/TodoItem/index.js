import React, { useState }  from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


const TodoItemContainer = ({todoItem: {isCompleted, text}, toggleCompletedHandler, removeTodoItemHandler, editTodoItemHandler}) => {
    const [isModifiable, setIsModifiable] = useState(false);

    return <TodoItem
        isCompleted={isCompleted}
        text={text}
        toggleCompletedHandler={toggleCompletedHandler}
        removeTodoItemHandler={removeTodoItemHandler}
        editTodoItemHandler={editTodoItemHandler}
        isModifiable={isModifiable}
        toggleIsModifiable={() => setIsModifiable(!isModifiable)}
    />
}


TodoItemContainer.propTypes = {
    todoItem: PropTypes.object.isRequired,
    toggleCompletedHandler: PropTypes.func.isRequired,
    removeTodoItemHandler: PropTypes.func.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired,
};

export default TodoItemContainer;