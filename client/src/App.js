import React from "react";
import './App.css';

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
