import React from 'react'
import { useState } from 'react';

export const InputField = (props) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

    var placeholder = props.placeholder
  return (
    <>
        <div className="input-field">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="text-input"
                placeholder = {placeholder}
            />
            <div className="underline" />
        </div>
    </>
  )
}
