import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact } from 'redux/contacts/contactsOperations';
import { Helmet } from 'react-helmet';
import { updateFiter } from 'redux/contacts/contactsActions';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(state => state.auth.isLoggedIn);
  const contacts = useSelector(state => state.contacts.entities);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = data => {
    const { name, number } = data;
    const contact = {
      name,
      number,
    };

    const nameExists =
      contacts !== undefined &&
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    if (nameExists) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
  };

  const changeFilter = event => {
    dispatch(updateFiter(event.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <ContactForm onSubmit={formSubmitHandler} />

      {!isLoadingContacts && <h3>Loading...</h3>}

      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getFilteredContacts()} />
      <ToastContainer autoClose={4000} />
    </div>
  );
}
