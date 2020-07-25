import * as ActionTypes from '../ActionTypes';

export const DocApprove = (state = { 
    isLoading: true,
    errMess: null,
    docApprove: [] 
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DOCAPPROVE:
            return {...state, isLoading: false, errMess: null, docApprove: action.payload};

        case ActionTypes.DOCAPPROVE_LOADING:
            return {...state, isLoading: true, errMess: null, docApprove: []}

        case ActionTypes.DOCAPPROVE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};