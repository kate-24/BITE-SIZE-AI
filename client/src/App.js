import React, { Fragment } from "react";

import './App.css';

import InputAddress from "./components/InputAddress.js";
import ShowSummary from "./components/ShowSummary.js";

function App() {
  return <Fragment>
    <InputAddress />
    <ShowSummary />
  </Fragment>;
}

export default App;