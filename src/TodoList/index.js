import React from "react";
import TodoItem from "../TodoItem";
import PropTypes from "prop-types";


const Index = ({
                   todoItems,
                   toggleCompletedHandler
               }) => {


    return (
        todoItems.map(
            (todoItem) =>
                <TodoItem
                    key={todoItem.id}
                    todoItem={todoItem}
                    toggleCompletedHandler={() => {toggleCompletedHandler(todoItem.id);}}

                />
        )
    )

}


Index.propTypes = {
    todoItems: PropTypes.array.isRequired,
    toggleCompletedHandler: PropTypes.func.isRequired,

};


export default Index;