import { ADD_NEWS, ADD_COMMENTS, DELETE_NEWS } from '../constants/index'

export const actionName = data => ({
  type: ADD_NEWS,
  payload: { data }
})
