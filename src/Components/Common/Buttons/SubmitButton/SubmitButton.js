import React from 'react';
import './SubmitButton.scss';

function SubmitButton({handleSubmit, name}) {
  return (
    <span onClick={handleSubmit} className='button-component'>
        {name}
    </span>
  )
}

export default SubmitButton