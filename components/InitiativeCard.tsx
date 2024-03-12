import { useState } from 'react'

const InitiativeCard = ({ card, cardList, setCardList, sortCardList }: any) => {
  
  const [ initiative, setInitiative ] = useState(card.initiative)
  const [ secondaryInitiative, setSecondaryInitiative ] = useState(card.secondaryInitiative)
  const [ disabled, setDisabled ] = useState(card.disabled)
  const [ done, setDone ] = useState(false)

  const handleInitiativeChange = (event: any) => {
    let value = Number(event.target.value)
    setDone(false)
    changeInitiative(value, 0)
  }
  const handleSecondaryInitiativeChange = (event: any) => {
    let value = Number(event.target.value)
    changeInitiative(null, value)
  }

  const handleFocus = (event: any) => {
    event.target.select()
  }
  const toggleDisable = () => {
    setDisabled(!disabled)
    let newInitiative = disabled ? 0 : 999
    changeInitiative(newInitiative, newInitiative)
  }
  const toggleDone = () => {
    setDone(!done)
  }

  const changeInitiative = (newInitiative: number|null, newSecondary: number) => {
    if (newInitiative !== null) {
      setInitiative(newInitiative)
      card.initiative = newInitiative
    }
    setSecondaryInitiative(newSecondary)
    card.secondaryInitiative = newSecondary

    let sortedCardList = sortCardList(cardList)
    setCardList((sorted: Array<initiativeCard>) => [...sortedCardList])
  }

  const handleClose = (event: any) => {
    let cardId = Number(event.target.value)
    let filteredCardList = cardList.filter(card => card.id !== cardId)
    setCardList((filtered: Array<initiativeCard>) => [...filteredCardList])
  }

  return (
    <div className={`
        h-16 pl-2 rounded-md flex flex-row bg-slate-50
        content-evenly items-center gap-2 text-4xl
        mx-2
        ${disabled ? 'disabled' : ''}
        ${done ? 'done' : ''}
      `}
    >
      <button
        className="basis-10 bg-slate-300 border-slate-200 rounded-full"
        onClick={toggleDone}
      >{ String.fromCharCode(10003) }</button>
      <button
        className="basis-10 bg-slate-300 border-slate-200 rounded-full"
        onClick={toggleDisable}
      >{ String.fromCharCode(8646) }</button>
      <input
        className="basis-16 max-w-16 p-1 border"
        type="number"
        onFocus={ handleFocus }
        onChange={ handleInitiativeChange }
        value={ initiative }
      />
      <input
        className="basis-16 max-w-16 p-1 border"
        type="number"
        onFocus={ handleFocus }
        onChange={ handleSecondaryInitiativeChange }
        value={ secondaryInitiative }
      />
      <div className="basis-80">{card.name}</div>
      <button
        className="basis-10 bg-slate-300 border-slate-200 rounded-full absolute right-4"
        onClick={handleClose}
        value={card.id}
      >{ String.fromCharCode(10005) }</button>
    </div>
  )
}

export default InitiativeCard
