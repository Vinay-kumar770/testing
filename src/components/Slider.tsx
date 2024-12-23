import React, { useState } from "react";

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({ min = 0, max = 100, step = 1 }) => {
  const [value, setValue] = useState<number>(min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        data-testid="slider"
      />
      <span data-testid="slider-value">{value}</span>
    </div>
  );
};

export default Slider;
