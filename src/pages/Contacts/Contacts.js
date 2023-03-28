import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./Contacts.css";

import fetchContacts from "store/contactsAPI";
import useUser from "features/hooks/UseUser";
import CreateContacts from "features/contacts/CreateContacts";
import ContactsList from "features/contacts/ContactsList";
import { FilterContacts } from "features/contacts/FilterContacts";

export const Contacts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const contacts = useSelector((state => state.contacts.contacts));
    const { isAuth } = useUser();

    return (
        <div className="container">
            {isAuth &&
                <>
                    <CreateContacts />
                    <div>
                        {contacts.length === 0
                            ? <p>You don't have contacts yet</p>
                            : <>
                                <ContactsList />
                                <FilterContacts />
                            </>
                        }
                    </div>
                </>
            }
        </div>
    )
}