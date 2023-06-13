import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const CircleButton = () => {
  return (
    <>
        <div className='CircleButton'>
        <FontAwesomeIcon className='icon' icon={faArrowRight} />
        </div>
    </>
  )
}
