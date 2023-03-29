import { useEffect } from "react";

import { isUserLogin } from "redux/auth/auth-selector"
import { useDispatch, useSelector } from "react-redux";
import "./Contacts.css";

import CreateContacts from "features/contacts/CreateContacts";
import ContactsList from "features/contacts/ContactsList";
import { FilterContacts } from "features/contacts/FilterContacts";
import { fetchContacts } from "api/contactsAPI";

export const Contacts = () => {

    const dispatch = useDispatch();

    const isLogin = useSelector(isUserLogin)

    useEffect(() => {
        if (isLogin)
            dispatch(fetchContacts())
    }, [dispatch, isLogin])

    const contacts = useSelector((state => state.contacts.contacts.items));
    

    return (
        <div className="container">
            {isLogin &&
                <>

                    <CreateContacts />

                    <div>
                        {contacts.length === 0 &&
                            < p > You don't have contacts yet</p>
                        }
                        {contacts.length > 0 &&
                            <>
                                <ContactsList />
                                <FilterContacts />
                            </>
                        }
                    </div>
                </>
            }
        </div >
    )
}