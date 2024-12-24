import React, { useState } from "react";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selected, setSelected] = useState<string>(options[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <select data-testid="dropdown" value={selected} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span data-testid="selected-value">{selected}</span>
    </div>
  );
};

export default Dropdown;
