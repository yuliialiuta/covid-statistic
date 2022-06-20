import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Country from "../Types/Country";
import Modal from "../Modal/Modal";

interface Summary {
  Global: any;
  Countries: Country[];
}

interface CountriesTableProps {
  filter: string;
}

const CountriesTable: React.FC<CountriesTableProps> = ({ filter }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (e: unknown) {
        setCountries([]);
      }
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
        {countries
          ?.filter((country: Country) =>
            country.Country.toLowerCase().startsWith(filter.toLowerCase())
          )
          .map((country: Country) => (
            <div
              className="row table-data p-2 m-1"
              key={country.Id}
              onClick={() => setSelectedCountry(country)}
              data-bs-toggle="modal"
              data-bs-target="#coutryDetailModal"
            >
              <div className="col-1">{country.Id}</div>
              <div className="col-6">{country.Country}</div>
              <div className="col-5">{country.TotalConfirmed}</div>
            </div>
          ))}
      </div>
      <Modal id="coutryDetailModal" country={selectedCountry} />
    </div>
  );
};

export default CountriesTable;
