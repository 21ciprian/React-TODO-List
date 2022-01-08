import React from 'react'

function ListItem({ text, onDelete, index }) {
  return (
    <li>{text}<button onClick={function () { onDelete(index) }}>Delete</button></li>


  )
}

export default ListItem
