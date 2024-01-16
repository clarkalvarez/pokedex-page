import React, { useState } from "react";
import styles from "./style.module.css";
import { Languages, PokemonInterface } from "../../types";
import SearchPokedex from "../../components/SearchPokedex";
import PokedexList from "../../components/PokedexList";
import SelectTypesPokedex from "../../components/SelectTypesPokedex";
import { useFetchGetAllPokedex } from "../../helpers/hooks/useFetchGetAllPokedex";
import { useFetchGetAllPokemonTypes } from "../../helpers/hooks/useFetchGetAllPokemonTypes";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getPokedexSelector } from "../../redux/reducers/globalSlice";

function PokedexPage({ title }: { title: string }) {
  const navigate = useNavigate();

  useFetchGetAllPokedex();
  const pokedexData = useAppSelector(getPokedexSelector);

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

  const handleAddPokemonButton = () => {
    navigate("/add-pokemon");
  };

  return (
    <>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <div className="container">
          <div className="col mb-4">
            <SearchPokedex value={searchQuery} onChange={handleSearchChange} />
          </div>
          <div className="col mb-4">
            <SelectTypesPokedex
              text="Filter by Types"
              options={options}
              onChange={handleTypeChange}
            />
          </div>
          <div className="col mb-4">
            <button
              onClick={handleAddPokemonButton}
              type="button"
              className="btn btn-primary w-200px "
            >
              Add New Pokemon
            </button>
          </div>
          <div className="col mb-4">
            <PokedexList filteredData={filteredData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PokedexPage;
