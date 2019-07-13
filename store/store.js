import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export function initializeStore(initialState = {}) {
	const isDev = process.env.NODE_ENV === 'development'
	return createStore(reducers, initialState, isDev ? composeWithDevTools(applyMiddleware(thunkMiddleware)) : applyMiddleware(thunkMiddleware))
}
