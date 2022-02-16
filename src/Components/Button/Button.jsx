import React from 'react'

export const Button = ({nameButton, event}) => {
  return (
    <button onClick={event} className='btn-button'>{nameButton}</button>
  )
}
