import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({
                      isCompleted, text, toggleCompletedHandler}) => {
    return (
        <div>
            <input type="checkbox" checked={isCompleted} onChange={toggleCompletedHandler} />
            {text}
        </div>
    );
};


TodoItem.propTypes = {
    isCompleted: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export default TodoItem;