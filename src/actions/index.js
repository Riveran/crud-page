import { ADD_NEWS, ADD_COMMENTS, DELETE_NEWS } from '../constants/index'

export function createNews (news) {
  console.log(news)
  return { type: ADD_NEWS, payload: { news } }
}
