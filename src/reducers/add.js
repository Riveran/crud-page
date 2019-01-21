import { myNews } from '../article'
import { ADD_NEWS } from '../constants'

const initialState = {
  add: myNews.news
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, add: action.payload }
    default:
      return state
  }
}
