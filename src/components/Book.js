import React from "react";
import Rating from "@mui/material/Rating";

export default function Book({ bookCover, title, author, rating }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bookCover}
          alt="book cover"
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
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </CardActions>
    </Card>
  );
}
