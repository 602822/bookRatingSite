import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import { useState } from "react";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  return (
    <div className="App">
      <ResponsiveAppBar setActiveMenuItem={setActiveMenuItem} />
      <header className="App-header">
        {activeMenuItem === "Home" && <h3>Home</h3>}
        {activeMenuItem === "Add Book" && <h3>Add Book</h3>}
      </header>
    </div>
  );
}

export default App;
