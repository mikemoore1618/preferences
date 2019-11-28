import React from 'react'
import Item from './Item'

const WishList = (props) => {
  const {preferences, onRemoveClick } = props
    return (
      <ul>
        {preferences.map((g, iForIndex) => {
          return (
            <Item onRemoveClick={onRemoveClick} 
            key={iForIndex} preference={g} 
            />
          )
        })}
      </ul>
    )
  }

export default WishList