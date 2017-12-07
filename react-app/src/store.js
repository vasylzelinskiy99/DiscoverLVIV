import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk'

var middleware = applyMiddleware(thunk)

export default function configureStore() {
  return(
   createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware)
 )
}
