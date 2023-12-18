import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { Container } from './App.styled';
import Loader from 'components/Loader/Loader';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>
  );
};

export default App;
