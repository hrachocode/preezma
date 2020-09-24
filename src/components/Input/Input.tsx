import React from 'react';

interface InputProps {
      label: string,
      name: string,
      type: string,
      required?: boolean,
      errorMessage?: string,
      [x:string]: any
}

const Input = ({ label, name, type, required, errorMessage, ...rest  }: InputProps) => {
      return (
            <div className='form-group'>    
                  <label>{label}</label>
                  <input 
                        className='form-control'
                        name={name}
                        type={type}
                        required={required}
                        {...rest}
                  />
                  <p className='error-message'>{errorMessage}</p>
            </div>
      );
}

export default Input;
