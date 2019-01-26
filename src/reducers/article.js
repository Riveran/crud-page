import { data } from '../data'
import { ADD_NEWS } from '../constants'

const initialState = {
  News: data,
  Category: 'all'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      console.log('action data', action)
      return {
        ...state,
        News: state.News.concat(action.article)
      }
    default:
      return state
  }
}
