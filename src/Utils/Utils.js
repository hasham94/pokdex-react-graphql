class Utils {
  static getStringyfyArray(array) {
    const names = array.map((item) => item.name)
    const stringifyName = JSON.stringify(names)
    return stringifyName
  }
  static filterArrayByType(mainArr, typeId) {
    if (typeId === "") {
      return mainArr
    }

    return mainArr.filter((item) => {
      const isValidType = item.types.find((type) => type.id == typeId)
      if (isValidType) {
        return item
      }
    })
  }
  static filterArrayByString(mainArr, searchText) {
    if (searchText === "") {
      return mainArr
    }

    searchText = searchText.toLowerCase()

    return mainArr.filter((itemObj) => this.searchInObj(itemObj, searchText))
  }

  static searchInObj(itemObj, searchText) {
    if (!itemObj) {
      return false
    }

    const propArray = Object.keys(itemObj)

    for (let i = 0; i < propArray.length; i += 1) {
      const prop = propArray[i]
      const value = itemObj[prop]

      if (typeof value === "string") {
        if (this.searchInString(value, searchText)) {
          return true
        }
      } else if (Array.isArray(value)) {
        if (this.searchInArray(value, searchText)) {
          return true
        }
      }

      if (typeof value === "object") {
        if (this.searchInObj(value, searchText)) {
          return true
        }
      }
    }
    return false
  }

  static searchInString(value, searchText) {
    return value.toLowerCase().includes(searchText)
  }

  static searchInArray(arr, searchText) {
    arr.forEach((value) => {
      if (typeof value === "string") {
        if (this.searchInString(value, searchText)) {
          return true
        }
      }

      if (typeof value === "object") {
        if (this.searchInObj(value, searchText)) {
          return true
        }
      }
      return false
    })
    return false
  }

  static removeItemFromFavourite = (pokemon) => {
    const alreadyAdded = localStorage.getItem("favourites")
    const items = JSON.parse(alreadyAdded)
    const updatedItems = items.filter((item) => item.id !== pokemon.id)
    localStorage.setItem("favourites", JSON.stringify([...updatedItems]))
  }

  static addItemToFavourite = (pokemon) => {
    const alreadyAdded = localStorage.getItem("favourites")
    if (alreadyAdded) {
      const items = JSON.parse(alreadyAdded)
      const isValidToAdd = items.find((item) => item.id === pokemon.id)
      if (!isValidToAdd) {
        localStorage.setItem("favourites", JSON.stringify([...items, pokemon]))
      }
    } else {
      localStorage.setItem("favourites", JSON.stringify([pokemon]))
    }
  }
  static isFavourite = (pokemon) => {
    const alreadyAdded = localStorage.getItem("favourites")
    if (alreadyAdded) {
      const items = JSON.parse(alreadyAdded)
      const isValidToAdd = items.find((item) => item.id === pokemon.id)
      if (!isValidToAdd) {
        return true
      }
    }
    return false
  }
}
export default Utils
