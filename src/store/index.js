import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../reducers/index'
import { createLogger, logger } from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(logger))

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, ...middleware)
)
