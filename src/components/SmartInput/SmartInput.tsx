import React, { useEffect, useState } from 'react';
import './SmartInput.css';

const SmartInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    console.log('HELLO!');
  }, [value]);

  console.log('value:', value);

  return (
    <div>
      <label>Smart Input</label>
      <br />
      <input value={value} onChange={handleChange} className='input' />
    </div>
  );
};

export default SmartInput;
