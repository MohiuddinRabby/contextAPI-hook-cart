import React from "react";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <Header></Header>
        <Shop></Shop>
      </ContextProvider>
    </>
  );
}

export default App;
