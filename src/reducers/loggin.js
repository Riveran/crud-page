import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../constants/index'

const initialState = {
  user: null,
  errorMsg: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: payload.name
        },
        errorMsg: ''
      }

    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: ''
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg
      }
    default:
      return state
  }
}
