import React from "react";
import Grid from "@mui/material/Grid"
import Book from "./Book";
import { Box, Paper } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';

/*
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
*/
export default function BookList({ books }) {
  return (
    <Box sx={{flexGrow: 1, marginTop: 5}}>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {books.map((book, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
        <Paper>
            <Book
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
