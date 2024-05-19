import React from "react";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { useState, useRef } from "react";
import ImageIcon from "@mui/icons-material/Image";
import Rating from "@mui/material/Rating";
import dbPromise from "../database/indexedDb";

export default function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSelectImage = (e) => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBook = () => {
    let book;
    if (image) {
      book = {
        bookCover: image,
        title: title,
        author: author,
        rating: rating,
      };
    } else {
      book = {
        title: title,
        author: author,
        rating: rating,
      };
    }

    setTitle("");
    setAuthor("");
    setRating(0);
    setImage(null);
    console.log(book);
    addBook(book);
  };

  const addBook = async (book) => {
    try {
      const db = await dbPromise;
      const tx = db.transaction("myStore", "readwrite");
      const store = tx.objectStore("myStore");
      await store.add(book);
      await tx.complete;
      console.log(`Book with id ${book.id} added successfully`);
    } catch (error) {
      console.log(`Error adding book with id:  ${book.id} error: `, error);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        margin: "20px",
        width: "400px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" component="p" marginBottom={5}>
        Add a new Book📕
      </Typography>
      <TextField
        id="tf1"
        label="Book Title"
        variant="outlined"
        sx={{ marginBottom: 2 }}
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        id="tf2"
        label="Author Fullname"
        variant="outlined"
        sx={{ marginBottom: 2 }}
        value={author}
        onChange={handleAuthorChange}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<ImageIcon></ImageIcon>}
        sx={{ marginBottom: 2, width: "35%", alignSelf: "center" }}
        onClick={handleSelectImage}
      >
        Add Image
      </Button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      ></input>
      <Typography variant="h6" component="p">
        {" "}
        Rate the book 1-5:{" "}
      </Typography>
      <Rating
        name="book-rating"
        value={rating}
        onChange={(event, newRating) => {
          setRating(newRating);
        }}
        sx={{ alignSelf: "center", marginBottom: 3 }}
      ></Rating>
      <Button variant="contained" color="primary" onClick={handleAddBook}>
        Add Book
      </Button>
    </Paper>
  );
}
