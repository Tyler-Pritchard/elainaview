import { combineReducers } from 'redux';
import auth from './auth';
import { chats } from './chats';
import user from './user';


export default combineReducers({
    auth: auth,
    chats: chats,
    user: user
});