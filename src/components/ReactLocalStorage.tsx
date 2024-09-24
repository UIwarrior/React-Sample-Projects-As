import React from 'react';

const LocalStorage = () => {
  // Edit this component

  const [inputData , setInputData ] = React.useState(localStorage.getItem('inputValue') || 
  '');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setInputData(value);
    localStorage.setItem('inputValue', value);
  }


  return (
    <div>
      <input data-testid='input-id' type="text" 
      onChange={handleChange} value={inputData} />
    </div>
  );
};

export default LocalStorage;