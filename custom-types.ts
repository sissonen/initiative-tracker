interface initiativeCard {
  id: number,
  name: string,
  initiative: number,
  secondaryInitiative: number,
  color: string,
  disabled: boolean,
}

interface storedList {
  listName: string,
  list: initiativeCard[],
}
