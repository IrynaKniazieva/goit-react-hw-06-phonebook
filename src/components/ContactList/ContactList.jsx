import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-slice";
import { getContacts } from "redux/contacts/contacts-selectors";
// import { setFilter } from "redux/filter/filter-slice";
import { getFilter } from "redux/filter/filter-selectors";

// import styles from './ContactItem.module.css'

// import React from "react"
// import PropTypes from "prop-types"


const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

        const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        if (filter === "") {
          return contacts;
        }
    
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };
      const filterContacts = getVisibleContacts();

      return (
        <ul>
            {filterContacts.map(({ name, number, id}) => (
            <li key={id} >
                {name} : <span>{number}</span>
                <button onClick={() => dispatch(deleteContact(id))}>Delete</button>  
            </li>
        ))}
        </ul>
      )


}
  


export default ContactList