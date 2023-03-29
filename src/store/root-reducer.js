import { persistReducer } from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts.slice';
import authReducer from "../redux/auth/auth-slice";

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token']
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    contacts: contactsReducer,
});

export default rootReducer;