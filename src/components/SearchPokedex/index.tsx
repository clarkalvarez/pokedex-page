import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchPokedex({ value, onChange }: SearchInputProps) {
  return (
    <>
      <div className="form-group">
        <label>Search Pokemon</label>
        <input
          className="form-control"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default SearchPokedex;
