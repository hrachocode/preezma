import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../Input/Input';
import { setRequest } from '../../Utils/utils';
import { useFetch } from '../../hooks/useFetch/useFetch';
import Loader from '../Loader/Loader';

const Form = () => {
      const history = useHistory();

      const formSchema = {
            text: {
                  label: "Name",
                  name: "name",
                  type: "text",
                  required: true,
                  errorMessage: 'Name is required and must a valid string'
            },
            phone: {
                  label: "Phone",
                  name: "phone",
                  type: "tel",
                  required: true,
                  errorMessage: 'Phone is required and must a valid phone number'
            },
            date: {
                  label: "Date",
                  name: "date",
                  type: "date",
                  required: false,
                  errorMessage: "Phone is required and must a valid date time"
            },
            submit: {
                  label: "Submit",
                  name: "submit",
                  type: "submit",
                  required: false,
                  errorMessage: ""
            }
      }

      const { isLoading } = useFetch({
            url: 'form/get',
      });
      const [inputValues, setValue] = useState({
            name: '',
            date: '',
            phone: ''
      });
      const [requestError, setRequestError] = useState('');

      const handleChange = (e: React.SyntheticEvent) => {
            e.persist();
            let target = e.target as HTMLInputElement;
            const resuableTarget: any = target.getAttribute('name')
            setValue(() => ({ ...inputValues, [resuableTarget]: target.value }))
      }

      const handleSubmit = async (e: React.SyntheticEvent) => {
            e.preventDefault();
            await setRequest({
                  method: 'post',
                  url: 'contacts/add',
                  data: inputValues,
                  onSuccess: () => history.push('/'),
                  onFail: () => setRequestError('Something went Wrong')
            })
      }

      return (
            !isLoading ? <form onSubmit={handleSubmit}>
                  {Object.values(formSchema).map((elem, index) =>
                        <Input
                              key={index}
                              onChange={handleChange}
                              label={elem.label}
                              name={elem.name}
                              type={elem.type}
                              required={elem.required}
                              placeholder={elem.name}
                              disabled={elem.type === 'submit' && Object.values(inputValues).indexOf('') !== -1}
                              errorMessage={elem.errorMessage}
                        />)}
                  <p>{requestError}</p>
            </form> : <div className='text-center'>{<Loader />}</div>
      );
}

export default Form;
