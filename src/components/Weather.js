import React, { Fragment } from "react";

const Weather = ({
  name,
  temprature,
  pressure,
  speed,
  humidity,
  description,
}) => {
  return (
    <Fragment>
      <div className='container my-3'>
        <div className='row' style={{ margin: "250px 0" }}>
          <div className='col' style={{ marginLeft: "250px" }}>
            <p>
              {name ? (
                <h2>
                  <p>{name}</p> {temprature} &#8451;
                </h2>
              ) : (
                ""
              )}
            </p>
            <p>{description}</p>
          </div>
          <div className='col'>
            <button className='btn btn-light'>view on map</button>
            <p> {pressure ? <p>pressure: {pressure} hPa</p> : ""} </p>
            <p> {humidity ? <p> Humidity: {humidity} %</p> : ""}</p>
            <p> {speed ? <p> Wind: {speed} m/s</p> : ""}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Weather;
