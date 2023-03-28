import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts.slice';
import authReducer from "../redux/auth/auth-slice";


// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// });

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: authReducer,
}
});

export default store;