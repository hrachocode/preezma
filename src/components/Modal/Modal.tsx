import React from 'react';

interface modalTypes {
      index: number
      name: string,
      onDelete: Function
}

const Modal = ({index, name, onDelete}: modalTypes) => {
      return (
            <div className="modal fade" id={`exampleModal${index}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                        <div className="modal-content">
                              <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Contact</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                    </button>
                              </div>
                              <div className="modal-body">
                                    Are you sure you want to delete contact <b>{name}</b>?
                              </div>
                              <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => onDelete()}>Submit changes</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Modal;
