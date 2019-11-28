import React from 'react'

const Item= (props) => {
  const { preference, onRemoveClick } = props
    return (
      <li>
        {preference.name}
        <button onClick={() => { onRemoveClick(preference)}}>Remove</button>
      </li>
    )
  }

export default Item