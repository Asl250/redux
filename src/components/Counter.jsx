import React from 'react'

const Counter = ({plus, minus, reset}) => {
  return (
    <div>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter
