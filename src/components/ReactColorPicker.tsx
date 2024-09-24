import React, { useState } from 'react';

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
}
