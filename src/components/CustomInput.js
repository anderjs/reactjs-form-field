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
    name = null,
    value = null,
    placeholder = 'Example: John Doe, John Smith...'
  }) => {
    if(value !== null) {
      return (
        <input 
          type={type}
          disabled={disabled}
          onChange={onChange}
          className={className}
          name={name}
          value={value}
          placeholder={placeholder}
          />
        );
    }
    return (
      <input 
        type={type}
        disabled={disabled}
        onChange={onChange}
        className={className}
        name={name}
        placeholder={placeholder}
        />
    );
}

export default CustomInput;