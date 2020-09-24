import React from 'react';

interface contactPropTypes {
      name: string,
      phone: string,
      dateCreated: string
}

const Contact = ({ name, phone, dateCreated }: contactPropTypes) => {
      return (
            <div className="card m-2" style={{ width: '22rem' }}>
                  <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{phone}</h6>
                        <p className="card-text">Create at: {dateCreated}</p>
                  </div>
            </div>
      );
}

export default Contact;
