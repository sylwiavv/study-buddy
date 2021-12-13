import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

export const InputWithTheButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  return(
    <>
      <input onChange={handleInputChange} value={inputValue} name="Name" id="name" placeholder="Enter your name" />
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe('Input with button', () => {
  it('Component is render', () => {
    render(<InputWithTheButton />);
    screen.getByText('Submit');
  });

  it('Properly input change', () => {
    render(<InputWithTheButton />);
    const input = screen.getByPlaceholderText('Enter your name');
    const button = screen.getByText('Submit');
    expect(button).toBeDisabled();
    fireEvent.change(input, {target: {value: 'Roman'}});
    expect(input).toHaveValue('Roman');
    expect(button).not.toBeDisabled();
  });
});