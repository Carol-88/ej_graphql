import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_COUNTRIES } from "../graphql/queries";
import { Country } from "../types/Country";
import { CountryCard } from "./CountryCard";
import { SearchBar } from "./SearchBar";

export const CountryList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [queryTerm, setQueryTerm] = useState<string>("");

  const handleSearch = () => {
    setQueryTerm(searchTerm.trim().toLowerCase());
    setSearchTerm("");
  };

  const { loading, error, data } = useQuery<{ countries: Country[] }>(
    GET_COUNTRIES
  );

  const filteredCountries =
    data?.countries.filter((country) =>
      country.name.toLowerCase().includes(queryTerm)
    ) || [];

  return (
    <div>
      <h2>Buscar país</h2>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      {queryTerm && loading && <p>Cargando...</p>}
      {queryTerm && error && <p>Error: {error.message}</p>}

      {queryTerm && filteredCountries.length === 0 && !loading && !error && (
        <p>No se encontraron resultados</p>
      )}

      {queryTerm &&
        !loading &&
        !error &&
        filteredCountries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
    </div>
  );
};
