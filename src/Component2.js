import React from 'react';
import { useState } from 'react';
import ToastNotification from './ToastNotification';

const Component2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setShowToast(true);
  };

  return (
    <>
      <h2>Component 2</h2>
      <form>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit" onClick={handleButtonClick}>
          Show Custom Toast
        </button>
      </form>
      {showToast && <ToastNotification messages={[inputValue]} />}
    </>
  );
};

export default Component2;
