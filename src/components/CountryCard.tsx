import React from "react";
import { Country } from "../types/Country";

interface CountryCardProps {
  country: Country;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="country-card">
      {/* Bandera */}
      <img
        src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
        alt={`Bandera de ${country.name}`}
        className="country-flag"
      />

      {/* Información del país */}
      <h3>
        {country.name} ({country.code})
      </h3>
      <div className="country-info">
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p>
          <strong>Continente:</strong> {country.continent.name}
        </p>
        <p>
          <strong>Moneda:</strong> {country.currency}
        </p>
        <p>
          <strong>Idiomas:</strong>{" "}
          {country.languages.map((lang) => lang.name).join(", ")}
        </p>
      </div>
    </div>
  );
};
