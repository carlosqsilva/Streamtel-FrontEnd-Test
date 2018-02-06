import * as type from "./constants"
import shortid from "shortid"

const add = contact => ({
  type: type.ADD,
  contact
})

const update = contacts => ({
  type: type.UPDATE,
  contacts
})

export const add_contact = contact => (dispatch, getState) => {
  const id = shortid.generate()
  dispatch(add({ id, ...contact }))
}

export const update_contact = contact => (dispatch, getState) => {
  const contacts = getState().contact
  const updated = contacts.map(item => {
    if (item.id !== contact.id) {
      return item
    }
    return {
      ...item,
      ...contact
    }
  })
  dispatch(update(updated))
}

export const remove_contact = id => (dispatch, getState) => {
  const contacts = getState().contact
  const updated = contacts.filter(_ => _.id !== id)
  dispatch(update(updated))
}
