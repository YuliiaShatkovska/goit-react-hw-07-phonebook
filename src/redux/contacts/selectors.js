import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../../redux/filter/selector';

export const selectContacts = state => state.contacts;

export const selectIsLoading = state => state.isLoading;

export const selectError = state => state.error;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  ({ contacts }, { filter }) => {
    const filtred = filter.toLowerCase();
    const contactList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtred)
    );

    return contactList;
  }
);
