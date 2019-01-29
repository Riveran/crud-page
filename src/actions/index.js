import {
  ADD_NEWS,
  ADD_CATEGORY,
  LOG_IN,
  LOG_IN_FAILURE,
  ADD_COMMENTS,
  DELETE_NEWS
} from '../constants/index'

function checkLoggin (params) {
  if (
    params.username.toLowerCase() !== 'admin' ||
    params.password !== '12345'
  ) {
    return false
  }

  return true
}

export function logIn (params, cb) {
  return dispatch => {
    if (checkLoggin(params)) {
      dispatch({
        type: LOG_IN,
        payload: {
          name: params.username
        }
      })
      cb()
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMsg: 'error'
        },
        error: true
      })
    }
  }
}

export function createNews (article) {
  return { type: ADD_NEWS, article }
}

export function setCategory (category) {
  return { type: ADD_CATEGORY, payload: category }
}

export function deleteNews (id) {
  console.log('id', id)
  return {
    type: DELETE_NEWS,
    payload: { id }
  }
}
