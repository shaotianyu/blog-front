// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { admin } from './redux/blog-redux';

export default combineReducers({admin})
