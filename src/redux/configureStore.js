import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { User } from './reducers/user';
import { Chats } from './reducers/chats';
import { DocApprove } from './reducers/docApprove';
import { MyForm } from './reducers/forms/myForm';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user: User,
            chats: Chats,
            docApprove: DocApprove,
            ...createForms({
                myForm: MyForm
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};