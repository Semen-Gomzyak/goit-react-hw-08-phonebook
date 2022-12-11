import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { authOperations } from "redux/auth";
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "components/PrivateRoute";
import { useAuth } from "../hooks";

const Home = lazy(() => import('../pages/Home'));
const RegisterForm = lazy(() => import('../pages/RegisterForm'));
const LoginForm = lazy(() => import('../pages/LoginForm'));
const Contacts = lazy(() => import('../pages/Contacts'));

export  function App() {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing User...</h1>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<PublicRoute component={<Home />} />} />
        <Route path="/register"
          element={
            <PublicRoute restricted redirectTo="/contacts" component={<RegisterForm />} />
          }
        />
        <Route path="/login"
          element={
            <PublicRoute restricted redirectTo="/contacts" component={<LoginForm />} />
          }
        />
        <Route path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { TitleBig, PrimaryTitles } from './Title/Title';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from 'redux/contacts/contactsOperations';
// import { updateFiter } from 'redux/contacts/contactsActions';
// import { contactsOperations } from 'redux/contacts';
// import { useEffect } from 'react';

// export function App() {
//     const dispatch = useDispatch();
//     const contacts = useSelector(state => state.contacts.entities);
//     const filter = useSelector(state => state.contacts.filter);

//    useEffect(() => {
//      dispatch(contactsOperations.fetchContacts());
//    }, [dispatch]);

//   const formSubmitHandler = data => {
//     const { name, number } = data;

//     const contact = {
//       name,
//       phone: number,
//     };

//     const nameExists = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (nameExists) {
//       toast.error(`${name} is already in contacts.`);
//       return;
//     }

//     dispatch(addContact(contact));
//   };

//   const changeFilter = event => {
//     dispatch(updateFiter(event.currentTarget.value));
//   };

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   return (
//     <div
//       style={{
//         justifyContent: 'center',
//         alignItems: 'center',
//         display: 'display',
//       }}
//     >
//       <TitleBig>Phonebook</TitleBig>
//       <ContactForm onSubmit={formSubmitHandler} />

//       <PrimaryTitles>Contacts</PrimaryTitles>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList contacts={getFilteredContacts()} />
//       <ToastContainer autoClose={4000} />
//     </div>
//   );
// }
