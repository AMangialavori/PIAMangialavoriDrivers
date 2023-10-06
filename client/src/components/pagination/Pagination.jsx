import style from "./pagination.module.css";
import { useState } from "react";

const Pagination = ({ page, setPage, maximumPages }) => {
  const [inPut, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(inPut) + 1);
    setPage(parseInt(page) + 1);
  };
  const previousPage = () => {
    setInput(parseInt(inPut) - 1);
    setPage(parseInt(page) - 1);
  };

  const lastPage = () => {
    setInput(Math.ceil(maximumPages));
    setPage(Math.ceil(maximumPages));
  };
  const firstPage = () => {
    setInput(1);
    setPage(1);
  };
  const onKeyDownHandler = (event) => {
    if (event.keyCode == 13) {
      setPage(parseInt(event.target.value));
      if (
        parseInt(event.target.value < 1) ||
        parseInt(event.target.value) > Math.ceil(maximumPages) ||
        isNaN(parseInt(event.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(event.target.value));
      }
    }
  };

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.pagination}>
        <button
          className={style.button}
          onClick={previousPage}
          disabled={page === 1 || page < 1}
        >
          Anterior
        </button>
        <button onClick={firstPage} disabled={page === 1}>
          1
        </button>
        <input
          onChange={(event) => {
            onChangeHandler(event);
          }}
          onKeyDown={(event) => onKeyDownHandler(event)}
          name="pageNumber"
          autoComplete="off"
          value={inPut}
        />
        <button onClick={lastPage} disabled={page === Math.ceil(maximumPages)}>
          {Math.ceil(maximumPages)}
        </button>
        <button
          onClick={nextPage}
          disabled={
            page === Math.ceil(maximumPages) || page > Math.ceil(maximumPages)
          }
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pagination;
