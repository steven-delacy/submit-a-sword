import { combineReducers } from 'redux'

import auth from './auth'
import swords from './picture'
export default combineReducers({
  auth,
  swords
})
