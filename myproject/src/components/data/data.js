import React, { useState } from "react";
import "./data.css";
import "./form.css";

function Data(props) {
  const [filterData, setFilterData] = useState([]);

  if (!props.covidData) {
    return <></>;
  }

  const handleSubmit = input => {
    const name = input.toLowerCase();
    const covidArr = props.covidData.Countries.filter(item => {
      return item.Country.toLowerCase() === name;
    });
    setFilterData(covidArr);
  };

  const covidData = props.covidData.Countries.map((i, e) => {
    if (i.Country.toLowerCase().includes(props.input)) {
      return (
        <div className="box" key={e}>
          <div key={e} className="Data">
            <h2>{i.Country}</h2>
            <p>New Confirmed: {i.NewConfirmed}</p>
            <p>Total Confirmed: {i.TotalConfirmed}</p>
            <p>New Deaths: {i.NewDeaths}</p>
            <p>Total Deaths: {i.TotalDeaths}</p>
            <p>New Recovered: {i.NewRecovered}</p>
            <p>Total Recovered: {i.TotalRecovered}</p>
          </div>
        </div>
      );
    }
  });

  const mappedCovid = filterData.map((covidArr, e) => {
    return (
      <div className="box" key={e}>
        <div className="Data">
          <h2>{covidArr.Country}</h2>
          <p>Total Confirmed: {covidArr.TotalConfirmed}</p>
          <p>New Deaths: {covidArr.NewDeaths}</p>
          <p>Total Deaths: {covidArr.TotalDeaths}</p>
          <p>New Recovered: {covidArr.NewRecovered}</p>
          <p>Total Recovered: {covidArr.TotalRecovered}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="Search By Country"
            onChange={props.handleChange}
            value={props.input}
          />
          <button onSubmit={props.handleSubmit}>Search</button>
        </form>
      </div>
      {mappedCovid}
      {covidData}
    </div>
  );
}

export default Data;
