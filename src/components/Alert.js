import React, { Fragment } from "react";

const Alert = ({ alert }) => {
  return (
    <Fragment>
      <div className='center-block'>
        {alert ? (
          <div
            class='alert alert-danger alert-dismissible fade show'
            role='alert'
            style={{
              width: "550px",
              textAlign: "center",
            }}>
            <strong>Sorry ! </strong> The city is not found.
            <button
              type='button'
              class='close'
              data-dismiss='alert'
              aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};
export default Alert;
