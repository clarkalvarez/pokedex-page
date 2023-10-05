import React from "react";
import styles from "./style.module.css";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchPokedex({ value, onChange }: SearchInputProps) {
  return (
    <>
      <h4>Search Pokemon</h4>
      <input
        className={styles.pokemonSearch}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default SearchPokedex;
