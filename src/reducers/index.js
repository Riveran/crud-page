import { combineReducers } from 'redux'
import add from './add'
import article from './article'
import category from './category'
import loggin from './loggin'

export const rootReducer = combineReducers({
  add,
  article,
  category,
  loggin
})
