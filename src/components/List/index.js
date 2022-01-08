import React from 'react'
import ListItem from '../ListItem'

function List({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map(function (task, i) {
        return <ListItem key={i} text={task} index={i} onDelete={onDelete} />
      })}

    </ul>

  )
}

export default List
