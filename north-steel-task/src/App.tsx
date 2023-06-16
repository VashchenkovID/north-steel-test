import "./App.css";
import React from 'react'
import AppRouter from "./components/AppRouter/AppRouter";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

function Contexts(props: { children: ReactNode }) {
  return <BrowserRouter>{props.children}</BrowserRouter>;
}

const App = () => {
  return (
    <>
      <Contexts>
        <AppRouter />
      </Contexts>
    </>
  );
}

export default App;
