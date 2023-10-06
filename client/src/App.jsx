import "./App.css";

import { Route, Routes } from "react-router-dom";

import { LandingPage, Home, Form, Detail } from "./views";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/detail/:id" element={<Detail></Detail>} />
          <Route path="/form" element={<Form></Form>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
