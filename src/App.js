import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import { useState } from "react";
import NewBook from "./components/NewBook";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  return (
    <div className="App">
      <ResponsiveAppBar setActiveMenuItem={setActiveMenuItem} />
      <header className="App-header">
        {activeMenuItem === "Home" && <h3>Home</h3>}
        {activeMenuItem === "Add Book" && <NewBook />}
      </header>
    </div>
  );
}

export default App;
