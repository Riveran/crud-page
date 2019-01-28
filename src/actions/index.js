import {
  ADD_NEWS,
  ADD_CATEGORY,
  ADD_COMMENTS,
  DELETE_NEWS
} from '../constants/index'

export function createNews (article) {
  return { type: ADD_NEWS, article }
}

export function setCategory (category) {
  return { type: ADD_CATEGORY, payload: category }
}
