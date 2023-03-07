import React, { useState, useEffect } from 'react';
import './ToastNotification.css'; // CSS file for styling


const ToastNotification = ({ timeout = 7000 }) => {
    const [messages, setMessages] = useState([]);
    const [timers, setTimers] = useState([]);
  
    useEffect(() => {
      // clear timer and remove message when time is up
      const handleTimerEnd = (index) => {
        setMessages(messages.filter((msg, i) => i !== index));
        setTimers(timers.filter((timer, i) => i !== index));
      };
  
      // handle mouse enter to reset timer
      const handleMouseEnter = (index) => {
        clearTimeout(timers[index]);
        setTimers([
          ...timers.slice(0, index),
          setTimeout(() => handleTimerEnd(index), timeout),
          ...timers.slice(index + 1)
        ]);
      };
  
      // handle click on close button to remove message
      const handleClose = (index) => {
        clearTimeout(timers[index]);
        setMessages(messages.filter((msg, i) => i !== index));
        setTimers(timers.filter((timer, i) => i !== index));
      };
  
      // start timer for each message and handle mouse enter and close events
      messages.forEach((msg, index) => {
        if (timers[index] === undefined) {
          setTimers([
            ...timers.slice(0, index),
            setTimeout(() => handleTimerEnd(index), timeout),
            ...timers.slice(index + 1)
          ]);
        }
      });
  
      // limit number of messages to 3 and queue up additional messages
      if (messages.length > 3) {
        setMessages(messages.slice(1));
        setTimers(timers.slice(1));
      }
    }, [messages, timers]);
  
  
    return (
      <div className="toast-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="toast"
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleClose(index)}
          >
            <button className="close-button">X</button>
            {msg}
          </div>
        ))}
      </div>
    );
  };
  
  export default ToastNotification;
  