import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./Contacts.css";

import fetchContacts from "api/contactsAPI";
import CreateContacts from "features/contacts/CreateContacts";
import ContactsList from "features/contacts/ContactsList";
import { FilterContacts } from "features/contacts/FilterContacts";

export const Contacts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const contacts = useSelector((state => state.contacts.contacts));

    return (
        <div className="container">
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
        </div >
    )
}