/* import { myNews } from '../article'
import { ADD_NEWS } from '../constants'

const initialState = {
  add: myNews.news
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      console.log('action data', action)
      return { ...state, add: myNews.news.concat(action.payload) }
    default:
      return state
  }
}
*/
