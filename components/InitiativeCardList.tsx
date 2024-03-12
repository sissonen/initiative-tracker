import InitiativeCard from '@/components/InitiativeCard'

const InitiativeCardList = ({ cardList, setCardList, sortCardList }: any) => {

  return (
    <div className="flex flex-col gap-2 pt-2">
      {
        cardList.map((card: initiativeCard) => 
          <InitiativeCard
            key={card.id}
            card={card}
            cardList={cardList}
            setCardList={setCardList}
            sortCardList={sortCardList}
          />)
      }
    </div>
  )
}

export default InitiativeCardList
