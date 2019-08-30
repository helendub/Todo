import React from "react";
import PropTypes from "prop-types";
import TodoItemViewable from './TodoItemViewable';
import TodoItemModifiable from './TodoItemModifiable';


const TodoItem = ({
                      isCompleted, text, toggleCompletedHandler, editTodoItemHandler,
                      removeTodoItemHandler, isModifiable, toggleIsModifiable}) => {
    return (
        <div>
            <input type="checkbox" checked={isCompleted} onChange={toggleCompletedHandler} />
            {
                isModifiable
                    ? <TodoItemModifiable text={text} editTodoItemHandler={editTodoItemHandler}
                                          toggleIsModifiable={toggleIsModifiable}/>
                    : <TodoItemViewable text={text} toggleIsModifiable={toggleIsModifiable}/>
            }
            <button onClick={removeTodoItemHandler}>X</button>
        </div>
    );
};


TodoItem.propTypes = {
    isCompleted: PropTypes.bool,
    text: PropTypes.string.isRequired,
    removeTodoItemHandler: PropTypes.func.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired,
    isModifiable: PropTypes.bool,
    toggleIsModifiable: PropTypes.func.isRequired,
};

export default TodoItem;