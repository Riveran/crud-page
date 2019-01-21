import { ADD_NEWS, ADD_COMMENTS, DELETE_NEWS } from '../constants/index'

export const createNews = data => ({
  type: ADD_NEWS,
  payload: data
})
