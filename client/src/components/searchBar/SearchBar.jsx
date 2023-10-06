import { useState } from "react";

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
    <div>
      <input
        type="text"
        placeholder="Ingresa el nombre del corredor"
        value={inputValue}
        onChange={handleOnChange}
      />
      <button onClick={handleOnclick}>Buscar</button>
    </div>
  );
};

export default SearchBar;
