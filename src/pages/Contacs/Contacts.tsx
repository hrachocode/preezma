import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact/Contact';
import { useFetch } from '../../hooks/useFetch/useFetch';

const Contacts = () => {
      const mockupData = [
            {
                  Name: 'contact 1',
                  Phone: '09922284',
                  DateCreated: '12-15-2020'
            },
            {
                  Name: 'contact 1',
                  Phone: '09922284',
                  DateCreated: '12-15-2020'
            },
            {
                  Name: 'contact 1',
                  Phone: '09922284',
                  DateCreated: '12-15-2020'
            },
            {
                  Name: 'contact 1',
                  Phone: '09922284',
                  DateCreated: '12-15-2020'
            },
            {
                  Name: 'contact 1',
                  Phone: '09922284',
                  DateCreated: '12-15-2020'
            },
            {
                  Name: 'contact 1',
                  Phone: '09922284',
                  DateCreated: '12-15-2020'
            },
      ]

      const { response, error, isLoading } = useFetch({
            url: 'contacts/get',
      });

      useEffect(() => {
            console.log(response, error, isLoading)
      }, [response, error, isLoading]);
      
      return (
            <>
                  <div className='row d-flex justify-content-between align-items-center p-2'>
                        <p className="h2 text-center">My Contacts</p>
                        <Link className='text-left' to='/add-contact'>Add Contact</Link>
                  </div>
                  <div className='row d-flex justify-content-between'>
                        {mockupData.map((elem, index) => <Contact key={index} name={elem.Name} phone={elem.Phone} dateCreated={elem.DateCreated} />)}
                  </div>
            </>
      );
}

export default Contacts;
