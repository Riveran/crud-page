import { ADD_NEWS, ADD_COMMENTS, DELETE_NEWS } from '../constants/index'

export function createNews (...args) {
  console.log('action', ...args)
  return { type: ADD_NEWS, payload: [...args] }
}
