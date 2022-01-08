import { useState } from 'react'

function Input({ onAdd }) {
  const [text, setText] = useState('')

  function handleChange(event) {
    const value = event.target.value
    setText(value)
  }
  return (
    <div>
      <input type='text' onChange={handleChange} value={text} />
      <button onClick={function () { onAdd(text) }}>Add</button>
    </div>
  )
}

export default Input
