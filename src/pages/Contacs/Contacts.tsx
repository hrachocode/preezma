import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Contact from '../../components/Contact/Contact';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import { useFetch } from '../../hooks/useFetch/useFetch';
import { setRequest } from '../../Utils/utils';

const Contacts = () => {
      const [requestError, setRequestError] = useState('');
      const { response, isLoading, setResponse }: { response: any, isLoading: boolean, setResponse: Function } = useFetch({
            url: 'contacts/all',
      });

      const updateContacts = (id: string) => {
            $('.modal').modal('hide');
            setResponse(() => [ ...response.filter((elem: any) => elem.id !== id)]);
      } 

      const deleteContact = async (id: string) => {
            await setRequest({
                  method: 'DELETE',
                  url: `contacts/delete/${id}`,
                  data: null,
                  onSuccess: () => updateContacts(id),
                  onFail: () => setRequestError('Something went Wrong')
            })
      }

      return (
            <>
                  <div className='row d-flex justify-content-between align-items-center p-2'>
                        <p className="h2 text-center">My Contacts</p>
                        <Link className='text-left' to='/add-contact'>Add New Contact</Link>
                  </div>
                  {!isLoading ? (response && response.length > 0 ?
                        <div className='row d-flex justify-content-flex-start'>
                              {response.map((elem: any, index: number) =>
                                    <div key={index}>
                                          <Contact
                                                index={index}
                                                name={elem.name}
                                                phone={elem.phone}
                                                dateCreated={elem.dateCreated}
                                          />
                                          <Modal index={index} name={elem.name} onDelete={() => deleteContact(elem.id)} />
                                    </div>
                              )}
                              <p>{requestError}</p>

                        </div> :
                        <div className="empty-contacts text-center">
                              <p className="h2">No Contacts created yet</p>
                              <Link to='/add-contact'>Create one</Link>
                        </div>) : <div className='text-center'><Loader /></div>
                  }
            </>
      );
}

export default Contacts;
