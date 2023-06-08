import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for styling

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="selected-option" onClick={handleDropdownToggle}>
        <span className="selected-text">{selectedOption}</span>
        <i className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
      </div>
      {isDropdownOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={selectedOption === option ? 'selected' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <div className="underline" />
    </div>
  );
};

export default Dropdown;
