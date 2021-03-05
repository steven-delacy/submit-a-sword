import {combineReducers} from 'redux'

import auth from './auth'
import swords from './swords'
export default combineReducers({
  auth,
  swords
})
