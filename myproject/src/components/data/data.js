import React from "react";
import "./data.css";
import Form from "../form/form";

function Data(props) {
  if (!props.covidData) {
    return <></>;
  }
  //   console.log(
  //     "These are the props in Data function",
  //     props.covidData.Countries
  //   );

  const covidData = props.covidData.Countries.map((i, e) => {
    return (
      <div className="box" key={e}>
        <div key={e} className="Data">
          <h2>Country: {i.Country}</h2>
          <p>New Confirmed: {i.NewConfirmed}</p>
          <p>Total Confirmed: {i.TotalConfirmed}</p>
          <p>New Deaths: {i.NewDeaths}</p>
          <p>Total Deaths: {i.TotalDeaths}</p>
          <p>New Recovered: {i.NewRecovered}</p>
          <p>Total Recovered: {i.TotalRecovered}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Form />
      {covidData}
    </div>
  );
}

export default Data;
