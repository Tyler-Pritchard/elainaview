import * as ActionTypes from '../ActionTypes';

export const Chat = (state = { 
    isLoading: true,
    errMess: null,
    chat: [] 
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CHAT:
            return {...state, isLoading: false, errMess: null, chat: action.payload};

        case ActionTypes.CHAT_LOADING:
            return {...state, isLoading: true, errMess: null, chat: []}

        case ActionTypes.CHAT_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};