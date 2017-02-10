import { combineReducers } from 'redux';

import tweets from './tweetReducer'
import user from './userReducer'

export default combineReducers({
  tweets,
  user
})