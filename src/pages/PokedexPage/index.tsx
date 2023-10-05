import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./style.module.css"; 
 import { Languages, PokemonInterface } from "../../types";
import SearchPokedex from "../../components/SearchPokedex";
import PokedexList from "../../components/PokedexList";
import SelectTypesPokedex from "../../components/SelectTypesPokedex";
 
function PokedexPage({ title }: { title: string }) {
  const [pokedexData, setPokedexData] = useState([]);
  const [pokedexTypesData, setPokedexTypesData] = useState([]);

  useEffect(() => {
    const readPokedexUrl = "http://localhost:3100/pokedex";
    const readPokedexTypesUrl = "http://localhost:3100/pokedexTypes";

    fetch(readPokedexUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPokedexData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

      fetch(readPokedexTypesUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setPokedexTypesData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }, []);


  const pokemonTypes: string[] = pokedexTypesData.map((data: Languages) => data.english);
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
