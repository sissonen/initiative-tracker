'use client'

import { useState } from 'react'

import '@/custom-types'
import AddCard from '@/components/AddCard'
import Storage from '@/components/Storage'
import InitiativeCardList from '@/components/InitiativeCardList'

const InitiativeTracker = () => {
  
  const [ cardList, setCardList ] = useState([])

  const sortCardList = (list: Array<initiativeCard>) => {
    let sortedList = []
    if (Array.isArray(list)) {
      sortedList = list.sort(
        (a, b) => {
          if (a.initiative == b.initiative) {
            return a.secondaryInitiative - b.secondaryInitiative
          }
          return a.initiative - b.initiative
        })
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
      <div className="footer fixed bottom-0 w-full">
        <AddCard
          cardList={cardList}
          setCardList={setCardList}
          sortCardList={sortCardList}
        />
        <Storage
          cardList={cardList}
          setCardList={setCardList}
        />
      </div>
    </div>
  )
}

export default InitiativeTracker
