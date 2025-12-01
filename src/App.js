import React from "react";
import "./App.css";
import "./Components/Header/header.css";
import "./Components/SideBar/diagram.css";
import "./Components/SideBar/sideBar.css";
import "./Components/NavBar/navBar.css";
import "./Components/ModalPage/modalPage.css";
import "./Components/EndModalPage/endModalPage.css";
import "./Components/PDF/pdf.css";
import "./Components/Form/form.css";

import { DashBoard } from "./Components/DashBoard/DashBoard";

const App = () => {
  return (
    <div className="App">
      <DashBoard />
    </div>
  );
};

export default App;
