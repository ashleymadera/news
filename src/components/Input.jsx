import React from 'react'

const Input = (props) =>
  (
    <div className='header-form'>
      <form style={props.style} >
        <input
          type="text"
          placeholder='Search'
          onChange={props.onChange}
          value={props.input}
        />
      </form></div>
  )
export default Input