import { data } from '../data'
import { ADD_NEWS, DELETE_NEWS } from '../constants'

const initialState = {
  News: data
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        News: state.News.concat(action.article)
      }

    case DELETE_NEWS:
      return {
        ...state,
        News: state.News.filter(items => items.id !== action.payload.id)
      }

    default:
      return state
  }
}
