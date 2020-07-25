import * as ActionTypes from '../ActionTypes';

export const Chat = (state = {
        isLoading: true,
        errMess: null,
        chat: []
    }, action) => {
        switch (action.type) {
            case ActionTypes.CHAT_LOADING:
                return {...state, isLoading: true, errMess: null, chat: []}
            default:
                return state;
        }
};