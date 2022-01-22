import React from 'react';
import './Button.css'

function Button({text}) {
  return <div>
      <button className='btn'>{text}</button>
  </div>;
}

export default Button;
