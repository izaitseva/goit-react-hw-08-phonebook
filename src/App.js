import { Route, Routes } from 'react-router-dom';
import { paths } from "paths";
import { Main } from 'pages/Main/Main';
import { Contacts } from 'pages/Contacts/Contacts';
import NotFound from 'pages/NotFound/NotFound';
import { Register } from 'pages/Register/RegisterPage';
import Login from 'pages/Login/LoginPage';

import PrivateRoute from 'modules/Authlayout/PrivateRoute';


export default function App() {

    return (
        <Routes>
            <Route path={paths.main} element={<Main />}>
                <Route path={paths.login} element={<Login />} />
                <Route path={paths.register} element={<Register />} />
                <Route element={PrivateRoute}>
                    <Route path={paths.contacts} element={<Contacts />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes >
    )
}