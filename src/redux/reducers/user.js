import * as ActionTypes from '../ActionTypes';

export const User = (state = {
        isLoading: true,
        errMess: null,
        user: []
    }, action) => {
        switch (action.type) {
            case ActionTypes.USER_LOADING:
                return {...state, isLoading: true, errMess: null, user: []}
            default:
                return state;
        }
};