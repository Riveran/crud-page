import { combineReducers } from 'redux'
import add from './add'
import article from './article'
import category from './category'

export const rootReducer = combineReducers({
  add,
  article,
  category
})
