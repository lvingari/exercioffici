/// Functional component with a button in React
import React from 'react';

function MyButton() {
  const handleClick = () => {
    console.log("Button was tapped");
  };

  return (
    <button onClick={handleClick}>
      Tap me
    </button>
  );
}

export default MyButton;
