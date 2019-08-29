import React, { useState } from "react";
import Input from './Input';
import PropTypes from "prop-types";

const InputContainer = ({addItemHandler, filterItemsHandler}) => {
    const [text, setText] = useState('');

    const addItem = () => {
        addItemHandler(text);
    };

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        filterItemsHandler(newText);
    };


    return (
        <Input
            value={text}
            handleChange={handleChange}
            addItemHandler={addItem}
        />
    );

}


InputContainer.propTypes = {
    addItemHandler: PropTypes.func.isRequired,
    filterItemsHandler: PropTypes.func.isRequired,
};

export default InputContainer;