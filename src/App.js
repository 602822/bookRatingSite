import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import { useState } from "react";
import NewBook from "./components/NewBook";
import BookList from "./components/BookList";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

 const books = await fetch(allbooks);


  return (
    <div className="App">
      <ResponsiveAppBar setActiveMenuItem={setActiveMenuItem} />
      <header className="App-header">
        {activeMenuItem === "Home" && <BookList books={books} />}
        {activeMenuItem === "Add Book" && <NewBook />}
      </header>
    </div>
  );
}

export default App;
