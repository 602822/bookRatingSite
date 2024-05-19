import React from "react";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import PropTypes from "prop-types";
import dbPromise from "../database/indexedDb";
import { Button } from "@mui/material";

export default function Book({ id, bookCover, title, author, rating }) {
  const handleDeleteBook = async (id) => {
    try {
      const db = await dbPromise;
      const tx = db.transaction("myStore", "readwrite");
      const store = tx.objectStore("myStore");
      await store.delete(id);
      await tx.complete;
      console.log(`Book with id: ${id} deleted successfully`);
    } catch (error) {
      console.log(`Failed to delete book with id: ${id} error: `, error);
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: { md: 250 },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          src={bookCover}
          alt="book cover"
          sx={{ height: { xs: 300, md: 500 } }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Rating name="half-rating-read" defaultValue={rating} readOnly />
        <Button variant="outlined" onClick={() => handleDeleteBook(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  bookCover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.number,
};

Book.defaultProps = {
  bookCover: "/static/images/noCover.png",
};
