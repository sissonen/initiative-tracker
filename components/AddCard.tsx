'use client'

import { useState } from 'react'

const AddCard = ({ cardList, setCardList, sortCardList }: any) => {
  
  const [ cardName, setCardName ] = useState('')
  const [ color, setColor ] = useState('red')
  // Preset colors which have corresponding CSS classes (.color-<color>)
  const colors = [ 'red', 'green', 'yellow', 'blue', 'turquoise', 'black', 'purple', 'pink', 'gray' ]

  const addCard = (event: any) => {
    event.preventDefault()
    if (cardName != '') {
      const newCard: initiativeCard = {
        id: Date.now(),
        name: cardName,
        initiative: 0,
        secondaryInitiative: 0,
        color: color,
        disabled: false,
      }
      setCardList(sortCardList(cardList.concat(newCard)))
      setCardName('')
      event.target.value = ''
    }
  }

  const handleNameChange = (event: any) => {
    setCardName(event.target.value)
  }
  const handleColorChange = (event: any) => {
    setColor(event.target.value)
  }
  const handleFocus = (event: any) => {
    event.target.select()
  }
  
  return (
    <div className="w-full bg-gray-200 p-2">
      <form onSubmit={addCard}>
        <label className="p-2">
          Name:
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={cardName}
            onChange={handleNameChange}
            onFocus={handleFocus}
            className="ml-2"
          />
        </label>
        <label className="p-2">
          Color:
          <select
            name="color"
            onChange={handleColorChange}
            className="ml-2"
          >
            {
              colors.map((value) => 
                <option key={value}>{value}</option>
              )
            }
          </select>
        </label>
        <button type="submit" className="bg-grey-500 font-bold rounded border-width-1 border-black">Add</button>
      </form>
    </div>
  )
}

export default AddCard
