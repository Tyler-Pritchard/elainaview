import * as ActionTypes from '../ActionTypes';

export const DocApprove = (state = {
        isLoading: true,
        errMess: null,
        docApprove: []
    }, action) => {
        switch (action.type) {
            case ActionTypes.DOCAPPROVE_LOADING:
                return {...state, isLoading: true, errMess: null, docApprove: []}
            default:
                return state;
        }
};