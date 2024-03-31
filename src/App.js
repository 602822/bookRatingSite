import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import { useState } from "react";
import NewBook from "./components/NewBook";
import BookList from "./components/BookList";
import { fetchBooksFromDb } from "./database/util";
import { CircularProgress } from "@mui/material";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch books from the database
    fetchBooksFromDb()
      .then((fetchedBooks) => {
        setBooks(fetchedBooks);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
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
