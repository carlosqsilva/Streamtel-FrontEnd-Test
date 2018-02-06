import * as type from "./constants"

const initial = {
  contact: []
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case type.ADD:
      return {
        contact: [...state.contact, action.contact]
      }
    case type.UPDATE:
      return {
        contact: action.contacts
      }
    default:
      return state
  }
}

export default reducer
