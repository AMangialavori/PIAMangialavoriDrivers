import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./landingPage.module.css";

const LandingPage = ({ setUserName }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setUserName(input);
    navigate("/home");
    setInput("");
  };

  return (
    <div>
      <iframe
        width="930"
        height="523"
        src="https://www.youtube.com/embed/bLehbCYiJmE"
        title="DHL Fastest Pit Stop Award: New F1 Pit Stop World Record (Red Bull Racing/Max Verstappen)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
      <form onSubmit={submitHandler}>
        <div className={style.container}>
          <div className={style.labelContainer}>
            <label className={style.label} htmlFor="name">
              Tu nombre:
            </label>
          </div>
          <input
            className={style.input}
            name="name"
            type="text"
            value={input}
            onChange={onChangeHandler}
          />

          <button className={style.button} type="submit">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;
