import { ADD_CATEGORY } from '../constants/index'
const initialState = {
  category: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    default:
      return state
  }
}
