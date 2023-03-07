import React from 'react';
import { useState } from 'react';
// import MainComponent from './MainComponent';
import ToastNotification from './ToastNotification';

const Component1 = () => {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
  };

  return (
    <>
      <h2>Component 1</h2>
      <button onClick={handleButtonClick}>Show Default Toast</button>
      {showToast && (
        <ToastNotification messages={['This is a default toast message']} />
        // <MainComponent/>
      )}
    </>
  );
};

export default Component1;
