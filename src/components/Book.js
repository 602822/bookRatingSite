import React from "react";
import Rating from "@mui/material/Rating";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

export default function Book({ bookCover, title, author, rating }) {
  return (
    <Card>
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
          readOnly
        />
      </CardActions>
    </Card>
  );
}
