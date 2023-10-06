import React from "react";
import styles from "./style.module.css";
import { SelectComponentProps } from "../../types";

const SelectTypesPokedex: React.FC<SelectComponentProps> = ({
  options,
  onChange,
}) => {
  return (
    <>
      <h4>Filter By Types</h4>
      <select className={styles.selectPokedex} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectTypesPokedex;
