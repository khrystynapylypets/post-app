import { createStore, combineReducers, applyMiddleware } from 'redux'
import postReducer from './reducers/postReducer'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(combineReducers(
      {
        postsState: postReducer,
      }),
      composeWithDevTools(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run,
  }
}
