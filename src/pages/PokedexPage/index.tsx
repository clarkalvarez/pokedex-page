import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./style.module.css";
import pokemonData from "../../pokemonList/pokedex.json";
import pokemonTypesData from "../../pokemonList/types.json";
import { PokemonInterface } from "../../types";
import SearchPokedex from "../../components/SearchPokedex";
import PokedexList from "../../components/PokedexList";
import SelectTypesPokedex from "../../components/SelectTypesPokedex";
 

function PokedexPage({ title }: { title: string }) {
  const pokemonTypes: string[] = pokemonTypesData.map((data) => data.english);
  const options = ["All", ...pokemonTypes];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredData = pokemonData.filter((pokemon: PokemonInterface) => {
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
        <h1 className={styles.bigblue}>{title}</h1>
        <div className={styles.pokemonFilters}>
          <div className={styles.pokemonSearchContainer}>
            <SearchPokedex value={searchQuery} onChange={handleSearchChange} />
            <SelectTypesPokedex options={options} onChange={handleTypeChange} />
          </div>
        </div>

        <PokedexList filteredData={filteredData}/>
     
      </div>
      <Outlet />
    </>
  );
}

export default PokedexPage;
