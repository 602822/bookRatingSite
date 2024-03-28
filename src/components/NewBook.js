import React from "react";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";

export default function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleAddBook = () => {
    console.log("Title: " + title, "Author: " + author);
    setTitle("");
    setAuthor("");
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
        sx={{ marginBottom: 10, width: "35%", alignSelf: "center" }}
      >
        Add Image
      </Button>
      <Button variant="contained" color="primary" onClick={handleAddBook}>
        Add Book
      </Button>
    </Paper>
  );
}
