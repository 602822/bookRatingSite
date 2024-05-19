import React from "react";
import Grid from "@mui/material/Grid";
import Book from "./Book";
import { Box, Paper } from "@mui/material";

export default function BookList({ books }) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 12 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {books.map((book, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Paper>
              <Book
                id={book.id}
                bookCover={book.bookCover}
                title={book.title}
                author={book.author}
                rating={book.rating}
              ></Book>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
