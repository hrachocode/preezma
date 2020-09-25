import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Contact from '../../components/Contact/Contact';
import Loader from '../../components/Loader/Loader';
import { useFetch } from '../../hooks/useFetch/useFetch';
import { setRequest } from '../../Utils/utils';

const Contacts = () => {
      const mockupData: {
            id: '1',
            Name: 'contact 1',
            Phone: '09922284',
            DateCreated: '12-15-2020'
      }[] = [
                  {
                        id: '1',
                        Name: 'contact 1',
                        Phone: '09922284',
                        DateCreated: '12-15-2020'
                  },
                  {
                        id: '1',
                        Name: 'contact 1',
                        Phone: '09922284',
                        DateCreated: '12-15-2020'
                  },
                  {
                        id: '1',
                        Name: 'contact 1',
                        Phone: '09922284',
                        DateCreated: '12-15-2020'
                  },
                  {
                        id: '1',
                        Name: 'contact 1',
                        Phone: '09922284',
                        DateCreated: '12-15-2020'
                  },
                  {
                        id: '1',
                        Name: 'contact 1',
                        Phone: '09922284',
                        DateCreated: '12-15-2020'
                  },
                  {
                        id: '1',
                        Name: 'contact 1',
                        Phone: '09922284',
                        DateCreated: '12-15-2020'
                  },
            ]

      const [requestError, setRequestError] = useState('');
      const { response, error, isLoading } = useFetch({
            url: 'contacts/get',
      });

      useEffect(() => {
            console.log(response, error, isLoading)
      }, [response, error, isLoading]);

      const deleteContact = async (id: string) => {
            await setRequest({
                  method: 'post',
                  url: 'contacts/delete',
                  data: id,
                  onSuccess: () => mockupData.filter(elem => elem.id !== id),
                  onFail: () => setRequestError('Something went Wrong')
            })
      }

      return (
            <>
                  <div className='row d-flex justify-content-between align-items-center p-2'>
                        <p className="h2 text-center">My Contacts</p>
                        <Link className='text-left' to='/add-contact'>Add New Contact</Link>
                  </div>
                  {!isLoading ? (mockupData && mockupData.length > 0 ?
                        <div className='row d-flex justify-content-between'>
                              {mockupData.map((elem, index) =>
                                    <Contact
                                          key={index}
                                          name={elem.Name}
                                          phone={elem.Phone}
                                          dateCreated={elem.DateCreated}
                                          onDelete={() => deleteContact('elem.id')}
                                    />)}
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
