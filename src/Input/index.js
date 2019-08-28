import React, { useState } from "react";
import Input from './Input';
import PropTypes from "prop-types";

const InputContainer = ({addItemHandler}) => {
    const [text, setText] = useState('');

    const addItem = () => {
        addItemHandler(text);
    };

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
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
};

export default InputContainer;