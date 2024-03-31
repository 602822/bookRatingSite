import React from "react";
import { Grid, Item } from "@mui/material";
import Book from "./Book";

export default function BookList({ books }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {books.map((book, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item>
            <Book
              bookCover={book.bookCover}
              title={book.title}
              autor={book.author}
              rating={book.rating}
            ></Book>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}
