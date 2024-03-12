'use client'

import { useState } from 'react'

import '@/custom-types'
import AddCard from '@/components/AddCard'
import InitiativeCardList from '@/components/InitiativeCardList'

const InitiativeTracker = () => {
  
  const [ cardList, setCardList ] = useState([])

  const sortCardList = (list: Array<initiativeCard>) => {
    let sortedList = []
    if (Array.isArray(list)) {
      sortedList = list.sort((a, b) => a.initiative - b.initiative)
    } else {
      sortedList = list
    }
    return sortedList
  }
  
  return (
    <div>
      <InitiativeCardList
        cardList={cardList}
        setCardList={setCardList}
        sortCardList={sortCardList}
      />
      <AddCard
        cardList={cardList}
        setCardList={setCardList}
        sortCardList={sortCardList}
      />
    </div>
  )
}

export default InitiativeTracker
