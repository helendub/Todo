import React from "react";
import PropTypes from "prop-types";

const Input = ({value, addItemHandler, handleChange}) => (
    <>
        <input onChange={handleChange} value={value}/>
        <button onClick={addItemHandler}>Add</button>
    </>
);


Input.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    addItemHandler: PropTypes.func.isRequired,
};

export default Input;