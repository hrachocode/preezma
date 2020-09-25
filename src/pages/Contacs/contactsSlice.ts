import { createSlice } from '@reduxjs/toolkit'

interface ContactTypes {
      contacts: Object
}

const initialState: ContactTypes = {
      contacts: {},
};

const contactsSlice = createSlice({
      name: 'contacts',
      initialState,
      reducers: {
            getContacts(state, action) {
                  state.contacts = action.payload;
            }
      }
})

export const { getContacts } = contactsSlice.actions

export default contactsSlice.reducer