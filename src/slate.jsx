import React, { useState } from 'react'


const Slate = () => {
  const [count, setCount] = useState("zero")

  const increment = () => {
    if (count === 10) {
      setCount("zero")
      return
    }
    if (count === "zero"){
      setCount(1)
      return
    }
    setCount( count + 1 )
  }

  return (
    <div className='slate'>
      <label htmlFor='button'>{ count }</label>
      <button id='button' className='btn btn-primary' onClick={ increment }> Click Me </button>
    </div>
  )
}

export default Slate