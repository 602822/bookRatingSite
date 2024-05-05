import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import { useState, useEffect } from "react";
import NewBook from "./components/NewBook";
import BookList from "./components/BookList";
import { CircularProgress } from "@mui/material";
import dbPromise from "./database/indexedDb";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
   const fetchBooks = async () => {
    try {
      const db = await dbPromise;
      const tx = db.transaction('myStore', 'readonly');
      const store = tx.objectStore('myStore');
      const books = await store.getAll();
      setBooks(books);
    } catch(error) {
      console.error("Error fetching books: ", error);
    } finally {
      setLoading(false);
    }
    
   };
   fetchBooks();
  }, []); // Run this effect only once when the component mounts

 

  return (
    <div className="App">
      <ResponsiveAppBar setActiveMenuItem={setActiveMenuItem} />
      <header className="App-header">
        {activeMenuItem === "Home" &&
          (loading ? (
            <CircularProgress /> // Display a loading indicator while fetching books
          ) : (
            <BookList books={books} />
          ))}
        {activeMenuItem === "Add Book" && <NewBook />}
      </header>
    </div>
  );
}

export default App;
