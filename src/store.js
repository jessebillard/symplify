import { createStore, applyMiddleware, compose } from 'redux'
import TaskReducer from './reducers/TaskReducer'
import thunk from "redux-thunk"

export function configureStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(TaskReducer, composeEnhancers(applyMiddleware(thunk))
  );
}

export const store = configureStore()