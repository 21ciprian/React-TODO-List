import { useState } from 'react'

function Input() {
  const [text, setText] = useState('')
  return (
    <div>
      <input type='text' />
      <button>Add</button>
    </div>
  )
}

export default Input
