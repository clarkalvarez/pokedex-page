import React, { useState } from "react";
import styles from "./style.module.css";
import { Languages, PokemonInterface } from "../../types";
import SearchPokedex from "../../components/SearchPokedex";
import PokedexList from "../../components/PokedexList";
import SelectTypesPokedex from "../../components/SelectTypesPokedex";
import { useFetchGetAllPokedex } from "../../helpers/hooks/useFetchGetAllPokedex";
import { useFetchGetAllPokemonTypes } from "../../helpers/hooks/useFetchGetAllPokemonTypes";

function PokedexPage({ title }: { title: string }) {
  const pokedexData = useFetchGetAllPokedex();
  const pokedexTypesData = useFetchGetAllPokemonTypes();

  const pokemonTypes: string[] = pokedexTypesData.map(
    (data: Languages) => data.english
  );
  const options = ["All", ...pokemonTypes];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredData = pokedexData.filter((pokemon: PokemonInterface) => {
    const includesSearch = pokemon.name.english
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const includesType =
      selectedType === "All" || pokemon.type.includes(selectedType);

    return includesSearch && includesType;
  }) as PokemonInterface[];

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function handleTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedType(event.target.value);
  }

  return (
    <>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.pokemonFilters}>
          <div className={styles.pokemonFilterContainer}>
            <SearchPokedex value={searchQuery} onChange={handleSearchChange} />
            <SelectTypesPokedex options={options} onChange={handleTypeChange} />
          </div>
        </div>

        <PokedexList filteredData={filteredData} />
      </div>
    </>
  );
}

export default PokedexPage;
