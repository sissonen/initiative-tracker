'use client'

import { useState } from 'react'
import InitiativeCardList from '@/components/InitiativeCardList'

const AddCard = ({ cardList, setCardList, sortCardList }: any) => {
  
  const [ cardName, setCardName ] = useState('')

  const addCard = (event: any) => {
    event.preventDefault()
    if (cardName != '') {
      const newCard: initiativeCard = {
        id: Date.now(),
        name: cardName,
        initiative: 0,
        secondaryInitiative: 0,
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
  const handleFocus = (event: any) => {
    event.target.select()
  }
  
  return (
    <div className="fixed bottom-0 w-full bg-gray-200 p-2">
      <form onSubmit={addCard}>
        <label className="p-2">
          Name:
          <input
            type="text"
            name="name"
            value={cardName}
            onChange={handleNameChange}
            onFocus={handleFocus}
            className="ml-2"
          />
        </label>
        <button type="submit" className="bg-grey-500 font-bold rounded border-width-1 border-black">Add</button>
      </form>
    </div>
  )
}

export default AddCard
