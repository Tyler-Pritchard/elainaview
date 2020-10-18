import { combineReducers } from 'redux';
import { Auth } from './auth';
import { Chats } from './chats';
import { User } from './user';


const reducers = combineReducers({
    auth: Auth,
    chats: Chats,
    user: User
});

export default reducers;