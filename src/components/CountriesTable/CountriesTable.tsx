import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

type Summary = {
  Global: any;
  Countries: Country[];
};

type Country = {
  Id: number;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
};

const CountriesTable: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Summary>(
        "https://api.covid19api.com/summary"
      );
      const allCountries = response.data.Countries.map(
        (country, index): Country => ({
          ...country,
          Id: index + 1,
        })
      );
      setCountries(allCountries);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="table fw-bolder">
        <div className="row table-head  p-2 m-1">
          <div className="col-1">№</div>
          <div className="col-6">Country</div>
          <div className="col-5">Total Confirmed</div>
        </div>
        {countries?.map((country: Country) => (
          <div className="row table-data p-2 m-1" key={country.Id}>
            <div className="col-1">{country.Id}</div>
            <div className="col-6">{country.Country}</div>
            <div className="col-5">{country.TotalConfirmed}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesTable;
