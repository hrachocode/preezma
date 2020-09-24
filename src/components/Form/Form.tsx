import React, { useState } from 'react';
import Input from '../Input/Input';

const Form = () => {

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

      const [inputValues, setValue] = useState({
            name: '',
            date: '',
            phone: ''
      });

      const handleChange = (e: React.SyntheticEvent) => {
            e.persist();
            let target = e.target as HTMLInputElement;
            const resuableTarget: any = target.getAttribute('name')
            setValue(() => ({ ...inputValues, [resuableTarget] : target.value }))
      }

      return (
            <form>
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
            </form>
      );
}

export default Form;
