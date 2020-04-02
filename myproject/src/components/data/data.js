import React, { useState } from "react";
import "./data.css";
import Form from "../form/form";

function Data(props) {
  const [filterData, setFilterData] = useState([]);

  if (!props.covidData) {
    return <></>;
  }
  // console.log(
  //   "These are the props in Data function",
  //   props.covidData.Countries
  // );

  const handleSubmit = input => {
    console.log(props.covidData.Countries);
    console.log("App - input", input);
    const name = input.toLowerCase();
    const covidArr = props.covidData.Countries.filter(item => {
      console.log(item);
      return item.Country.toLowerCase() === name;
    });
    setFilterData(covidArr);
    console.log("covidArr data", covidArr);
  };

  const covidData = props.covidData.Countries.map((i, e) => {
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
  // if(input === name){
  //     return (
  //         {mappedCovid}
  //     )
  // }else{
  //     return (covidData)
  // }
  return (
    <div>
      <Form onSubmit={handleSubmit} />
      {mappedCovid}
      {covidData}
    </div>
  );
}

export default Data;
