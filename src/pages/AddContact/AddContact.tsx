import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/Form/Form';

const AddContact = () => {
      return (
            <div>
                  <div className='row d-flex justify-content-between align-items-center p-2'>
                        <p className="h2 text-center">My Contacts</p>
                        <Link className='text-left' to='/'>Back to home screen</Link>
                  </div>
                  <Form />
            </div>
      );
}

export default AddContact;
