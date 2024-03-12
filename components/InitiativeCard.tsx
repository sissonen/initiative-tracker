import { useState } from 'react'

const InitiativeCard = ({ card, cardList, setCardList, sortCardList }: any) => {
  
  const [ initiative, setInitiative ] = useState(card.initiative)
  const [ disabled, setDisabled ] = useState(card.disabled)

  const handleInitiativeChange = (event: any) => {
    let value = Number(event.target.value)
    changeInitiative(value)
  }

  const handleFocus = (event: any) => {
    event.target.select()
  }
  const toggleDisable = () => {
    setDisabled(!disabled)
    let newInitiative = disabled ? 0 : 999
    changeInitiative(newInitiative)
  }

  const changeInitiative = (newInitiative: number) => {
    setInitiative(newInitiative)
    card.initiative = newInitiative
    let sortedCardList = sortCardList(cardList)
    setCardList((sorted: Array<initiativeCard>) => [...sortedCardList])
  }

    //<div className="h-8 "+{disabled ? 'disabled' : ''}>
  return (
    <div className={`h-16 pl-2 rounded-md flex flex-row bg-slate-50
      content-evenly items-center gap-2 text-4xl
      mx-2
      ${disabled ? 'disabled' : ''}`}
    >
      <button
        className="basis-14 bg-slate-300 border-slate-200 rounded-full"
        onClick={toggleDisable}
        value={card.id}
      >{ disabled ? String.fromCharCode(171) : String.fromCharCode(187) }</button>
      <input
        className="basis-16 max-w-16"
        type="number"
        onFocus={ handleFocus }
        onChange={ handleInitiativeChange }
        value={ initiative }
      />
      <div className="">{card.name}</div>
    </div>
  )
}

export default InitiativeCard
