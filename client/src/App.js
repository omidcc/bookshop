import React from "react";
import './App.css';

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
    </div>
  );
}

export default App;
