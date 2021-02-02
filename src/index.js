import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";

import "./index.css";

const divRoot = document.querySelector("#root");


// ReactDOM.render( <PrimeraApp nombre="Ítalo" despedida="Adiós." />, divRoot);
ReactDOM.render( <CounterApp value={256} />, divRoot );