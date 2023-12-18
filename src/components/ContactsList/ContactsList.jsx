import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selector';
import { deleteContacts } from '../../redux/contacts/operations';
import { ContactsBtn, ContactsItem, ContactsList } from './ContactList.styled';
import Notiflix from 'notiflix';

const ContactList = () => {
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);

  const dispatch = useDispatch();

  const deleteContact = ({ id, name }) => {
    dispatch(deleteContacts(id));
    Notiflix.Notify.info(
      `
    The contact ${name} has been successfully deleted!`
    );
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

          <ContactsBtn type="button" onClick={() => deleteContact(el)}>
            Delete
          </ContactsBtn>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;
