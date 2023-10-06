import React from "react";
import { SelectComponentProps } from "../../types";

const SelectTypesPokedex: React.FC<SelectComponentProps> = ({
  text,
  disabled,
  options,
  onChange,
}) => {
  return (
    <>
      <div className="form-group">
        <label>{text}</label>
        <select
          disabled={disabled}
          className="form-control"
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectTypesPokedex;
