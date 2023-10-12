import "./App.css";

import { Route, Routes } from "react-router-dom";

import { LandingPage, Home, Detail } from "./views";

import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<LandingPage setUserName={setUserName}></LandingPage>}
          />
          <Route path="/home" element={<Home userName={userName}></Home>} />
          <Route path="/detail/:id" element={<Detail></Detail>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
