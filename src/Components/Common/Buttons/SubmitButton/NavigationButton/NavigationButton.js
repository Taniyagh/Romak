import React from 'react';
import './NavigationButton.scss';

function NavigationButton({name, clickHandler}) {
  return (
    <span onClick={clickHandler} className='naviation-button-component'>
        {name}
    </span>
  )
}

export default NavigationButton