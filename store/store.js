import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export function initializeStore(initialState = {}) {
	return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
