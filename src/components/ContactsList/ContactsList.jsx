import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selector';
import { deleteContacts } from '../../redux/contacts/operations';
import { ContactsBtn, ContactsItem, ContactsList } from './ContactList.styled';

const ContactList = () => {
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);

  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const filtred = filter.toLowerCase();
  const contactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtred)
  );

  return (
    <ContactsList>
      {contactList.map(el => (
        <ContactsItem key={el.id}>
          <div>
            <b>{el.name}</b>: {el.number}
          </div>

          <ContactsBtn type="button" onClick={() => deleteContact(el.id)}>
            Delete
          </ContactsBtn>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;
