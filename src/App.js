import React from "react";
import { BrowserRouter } from "react-router-dom";
import AddTodo from "./Pages/AddTodo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AddTodo />
      </div>
    </BrowserRouter>
  );
}

export default App;
