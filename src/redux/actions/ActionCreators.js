import * as ActionTypes from './ActionTypes';
import baseUrl from '../../baseUrl';


//Chat Action Creators
export const Chats = () => dispatch => {
    dispatch(chatLoading());

    return fetch(`${baseUrl}
/api
/chats`)
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(chat => dispatch(addChat(chat)))
        .catch(error => dispatch(chatFailed(error.message)));
};

export const addChat = chat => ({
    type: ActionTypes.ADD_CHAT,
    payload: chat
});

export const chatLoading = () => ({
    type: ActionTypes.CHAT_LOADING
});

export const chatFailed = errMess => ({
    type: ActionTypes.CHAT_FAILED,
    payload: errMess
});

//DocApprove Action Creators
// export const fetchDocApprove = () => dispatch => {
//     dispatch(docApproveLoading());

//     return fetch(baseUrl + 'docApprove')
//         .then(response => {
//                 if (response.ok) {
//                     return response;
//                 } else {
//                     const error = new Error(`Error ${response.status}: ${response.statusText}`);
//                     error.response = response;
//                     throw error;
//                 }
//             },
//             error => {
//                 const errMess = new Error(error.message);
//                 throw errMess;
//             }
//         )
//         .then(response => response.json())
//         .then(docApprove => dispatch(addDocApprove(docApprove)))
//         .catch(error => dispatch(docApproveFailed(error.message)));
// };

// export const addDocApprove = docApprove => ({
//     type: ActionTypes.ADD_DOCAPPROVE,
//     payload: docApprove
// });

// export const docApproveLoading = () => ({
//     type: ActionTypes.DOCAPPROVE_LOADING
// });

// export const docApproveFailed = errMess => ({
//     type: ActionTypes.DOCAPPROVE_FAILED,
//     payload: errMess
// });


//User Action Creators
export const fetchUser = () => dispatch => {
    dispatch(userLoading());

    return fetch(baseUrl + 'user')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(user => dispatch(addUser(user)))
        .catch(error => dispatch(userFailed(error.message)));
};

export const addUser = user => ({
    type: ActionTypes.ADD_USER,
    payload: user
});

export const userLoading = () => ({
    type: ActionTypes.USER_LOADING
});

export const userFailed = errMess => ({
    type: ActionTypes.USER_FAILED,
    payload: errMess
});