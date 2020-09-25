import React from 'react';

interface contactPropTypes {
      index: number,
      name: string,
      phone: string,
      dateCreated: string,
}

const Contact = ({ index, name, phone, dateCreated }: contactPropTypes) => {
      return (
            <div className="card m-2" style={{ width: '15rem' }}>
                  <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Phone: {phone}</h6>
                        {dateCreated && <p className="card-text">Create at: {dateCreated}</p>}
                  </div>
                  <button type="button" data-toggle="modal" data-target={`#exampleModal${index}`} className="btn btn-danger">Delete</button>
            </div>
      );
}

export default Contact;
