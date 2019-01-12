import React from 'react';

/**
 * 
 * @typedef {React.SFC} CustomInput
 * @prop {string} type Type of a basic input.
 * @prop {boolean} disabled Will evaluate if an input is disabled or not.
 * @prop {function} onChange Will react's to onChange event giving a function.
 * @prop {string} className class StyleSHeet for a input.
 * @prop {string} name
 * @returns {component} Will returns a controlled or uncontrolled component.
 */
const CustomInput = (
  { type = 'text', 
    disabled = false, 
    onChange = null,
    className = 'form-control',
    name = '',
    value = '',
    placeholder = 'Example: John Doe, John Smith...'
  }) => {
    return (
      <input 
        type={type}
        disabled={disabled}
        onChange={onChange}
        className={className}
        name={name}
        placeholder={placeholder}
        value={value}
        />
    );
}

export default CustomInput;