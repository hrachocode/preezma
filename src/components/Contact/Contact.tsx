import React from 'react';

interface contactPropTypes {
      name: string,
      phone: string,
      dateCreated: string,
      onDelete: Function
}

const Contact = ({ name, phone, dateCreated, onDelete }: contactPropTypes) => {
      return (
            <div className="card m-2" style={{ width: '22rem' }}>
                  <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Phone: {phone}</h6>
                        <p className="card-text">Create at: {dateCreated}</p>
                  </div>
                  <button type="button" onClick={() => onDelete()} className="btn btn-danger">Delete</button>
            </div>
      );
}

export default Contact;
