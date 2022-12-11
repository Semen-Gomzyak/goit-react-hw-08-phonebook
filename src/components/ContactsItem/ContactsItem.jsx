import { IconButton } from 'components/IconButton/IconButton.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import {
  ContactInfo,
  ContactInformation,
  ButtonContainer,
} from './ContactsItem.styled';
import { ReactComponent as DeleteIcon } from '../svg/delete.svg';
// import { ReactComponent as EditIcon } from '../svg/pencil.svg';
// import { useState } from 'react';

export const ContactsItem = ({ contact }) => {
  // const [isChangeContact, setIsChangeContact] = useState(false);
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  return (
    <ContactInfo key={id}>
      <ContactInformation>
        - {name}: {number}
      </ContactInformation>
      <ButtonContainer>
        {/* <IconButton type="button" onClick={() => setIsChangeContact(true)}>
        <EditIcon width="25px" height="25px" />
      </IconButton> */}
        <IconButton type="button" onClick={() => dispatch(deleteContact(id))}>
          <DeleteIcon width="25px" height="25px" />
        </IconButton>
      </ButtonContainer>
      {/* {isChangeContact &&  <div
          // nameForChange={name}
          // numberForChange={phonenumber}
          // id={id}
          // setIsChangeContact={setIsChangeContact}
          // toggleShowChangeMenu={console.log("first")}
        />
      } */}
    </ContactInfo>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
