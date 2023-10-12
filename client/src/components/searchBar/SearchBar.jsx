import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ setSearchName }) => {
  const [inputValue, setinputValue] = useState("");

  const handleOnChange = (event) => {
    setinputValue(event.target.value);
  };

  const handleOnclick = () => {
    setSearchName(inputValue);
    setinputValue("");
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        placeholder="nombre del corredor"
        value={inputValue}
        onChange={handleOnChange}
      />
      <button onClick={handleOnclick}>Buscar</button>
    </div>
  );
};

export default SearchBar;
