import React, { useState } from 'react';

function UnitConverter() {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('');
  const [outputUnit, setOutputUnit] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const conversionFactors = {
    temperature: {
      celsius: {
        fahrenheit: (value: number) => value * 9/5 + 32,
        kelvin: (value: number) => value + 273.15,
      },
      fahrenheit: {
        celsius: (value: number) => (value - 32) * 5/9,
        kelvin: (value: number) => (value - 32) * 5/9 + 273.15,
      },
      kelvin: {
        celsius: (value: number) => value - 273.15,
        fahrenheit: (value: number) => (value - 273.15) * 9/5 + 32,
      },
    },
    length: {
      meter: {
        foot: (value: number) => value * 3.2808,
        inch: (value: number) => value * 39.3701,
      },
      foot: {
        meter: (value: number) => value / 3.2808,
        inch: (value: number) => value * 12,
      },
      inch: {
        meter: (value: number) => value / 39.3701,
        foot: (value: number) => value / 12,
      },
    },
    weight: {
      kilogram: {
        pound: (value: number) => value * 2.2046,
        ounce: (value: number) => value * 35.2739,
      },
      pound: {
        kilogram: (value: number) => value / 2.2046,
        ounce: (value: number) => value * 16,
      },
      ounce: {
        kilogram: (value: number) => value / 35.2739,
        pound: (value: number) => value / 16,
      },
  }
};

  const handleConvert = () => {
    const inputUnitConversionFactor = conversionFactors[inputUnit][outputUnit];
    const convertedValue = inputUnitConversionFactor(inputValue);
    setConvertedValue(convertedValue);
  };

  return (
    <div>
      <form>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select value={inputUnit} onChange={(e) => setInputUnit(e.target.value)}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <select value={outputUnit} onChange={(e) => setOutputUnit(e.target.value)}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <button onClick={handleConvert}>Convert</button>
      </form>
      <p>{convertedValue}</p>
    </div>
  );
}

export default UnitConverter;
