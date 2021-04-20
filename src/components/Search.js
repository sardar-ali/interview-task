import React, { Fragment, useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Alert from "./Alert";

const Search = () => {
  //initailize all state
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [temprature, setTemprature] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [speed, setSpeed] = useState("");
  const [error, setError] = useState("");

  //set city
  const onChange = (event) => {
    const { value } = event.target;
    setCity(value);
  };

  //get information about entere= city
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9a4938be1eecbc0ae3c0490bfa27849&units=metric`
      );

      //set the State value
      setName(res.data.name);
      setDescription(res.data.weather[0].description);
      setTemprature(res.data.main.temp);
      setPressure(res.data.main.pressure);
      setHumidity(res.data.main.humidity);
      setSpeed(res.data.wind.speed);
    } catch (err) {
      //set error message
      setError(err);
    }
  };

  return (
    <Fragment>
      <div className='container'>
        <div style={{ margin: "100px 0" }}>
          <div style={{ marginLeft: "270px" }}>
            <Alert alert={error} />
          </div>
          <form onSubmit={onSubmit}>
            <div
              className='input-group'
              style={{ justifyContent: "center", margin: "20px 0" }}>
              <div className='form-outline'>
                <input
                  id='search-input'
                  type='search'
                  className='form-control'
                  placeholder='Enter city name here ....'
                  name='city'
                  value={city}
                  onChange={onChange}
                  style={{ width: "500px" }}
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                style={{ margin: "0 5px" }}>
                Search
              </button>
            </div>
          </form>
          <div className='my-5' style={{ margin: "600px 0" }}>
            <Weather
              name={name}
              temprature={temprature}
              pressure={pressure}
              humidity={humidity}
              speed={speed}
              description={description}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
