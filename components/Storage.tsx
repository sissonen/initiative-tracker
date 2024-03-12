import { useState, useEffect } from 'react'

const Storage = ({ cardList, setCardList }: any) => {

  const [ listName, setListName ] = useState('')
  const [ savedLists, setSavedLists ] = useState<storedList[]>([])
  const [ selectedSavedList, setSelectedSavedList ] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Get lists in localStorage
      const storedLists = JSON.parse(window.localStorage.getItem('card-lists') || '[]')
      setSavedLists(storedLists)
      if (storedLists.length > 0) {
        setSelectedSavedList(storedLists[0].listName)
      }
    }
  }, []);

  const handleListNameChange = (event: any) => {
    setListName(event.target.value)
  }
  const handleSavedListsChange = (event: any) => {
    setSelectedSavedList(event.target.value)
  }
  const handleFocus = (event: any) => {
    event.target.select()
  }
  const saveList = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (listName && cardList) {
        const storageCardList = {
          "listName": listName,
          "list": cardList
        }
        let newCardLists = []
        if (Array.isArray(savedLists)) {
          // Replace stored list with a same name
          newCardLists = [...savedLists.filter((storedList) =>
            storedList.listName !== listName
          ), storageCardList]
        } else {
          newCardLists = [storageCardList]
        }
        window.localStorage.setItem('card-lists', JSON.stringify(newCardLists))
        setSavedLists(newCardLists)
        setSelectedSavedList(listName)
      }
    }
  }

  const restoreList = () => {
    const restoredList = savedLists.filter((storedList) =>
      storedList.listName == selectedSavedList
    )
    if (Array.isArray(restoredList)) {
      setCardList(restoredList[0].list)
      setListName(selectedSavedList)
    }
  }

  const deleteList = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const remainingLists = [...savedLists.filter((storedList) =>
        storedList.listName !== selectedSavedList
      )]
      window.localStorage.setItem('card-lists', JSON.stringify(remainingLists))
      setSavedLists(remainingLists)
      if (remainingLists.length > 0) {
        setSelectedSavedList(remainingLists[0].listName)
      }
    }
  }

  return (
    <div className="settings w-full bg-gray-200 p-2 border-t border-gray-400">
      <label className="p-2">
        List name:
        <input
          type="text"
          name="listName"
          autoComplete="off"
          value={listName}
          onChange={handleListNameChange}
          onFocus={handleFocus}
          className="ml-2"
        />
      </label>
      <button
        className="save-button p-2"
        onClick={saveList}
      >
        Save
      </button>
      <label className="p-2 ml-8">
        Saved lists:
        <select
          name="savedLists"
          onChange={handleSavedListsChange}
          value={selectedSavedList}
          className="ml-2"
        >
          {
            Array.isArray(savedLists) && savedLists.map((storedList) =>
            <option key={storedList.listName}>{storedList.listName}</option>)
          }
        </select>
      </label>
      <button
        onClick={restoreList}
        className="p-2"
      >
        Restore
      </button>
      <button
        onClick={deleteList}
        className="p-2"
      >
        Delete
      </button>
    </div>
  )

}

export default Storage
