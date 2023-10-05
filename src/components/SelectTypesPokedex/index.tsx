import React from "react";
import styles from "./style.module.css";
import { SelectComponentProps } from "../../types";

const SelectTypesPokedex: React.FC<SelectComponentProps> = ({
  options,
  onChange,
}) => {
  return (
    <div className={styles.selectContainer}>
      <h4>Filter By Types</h4>
      <select className={styles.customSelect} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTypesPokedex;
