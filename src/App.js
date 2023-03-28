import { Route, Routes } from 'react-router-dom';
import { paths } from "paths";
import { Main } from 'pages/Main/Main';
import { Contacts } from 'pages/Contacts/Contacts';
import Login from 'pages/Login/Login';
import NotFound from 'pages/NotFound/NotFound';
import { Register } from 'pages/Register/RegisterPage';


export default function App() {

    return (
        <Routes>
            <Route path={paths.main} element={<Main />}>
                <Route index element={<Contacts />} />
                <Route path={paths.login} element={<Login />} />
                <Route path={paths.register} element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes >
    )
}