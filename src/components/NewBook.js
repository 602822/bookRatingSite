import React from "react";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";

export default function NewBook() {
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
      />
      <TextField
        id="tf2"
        label="Author Fullname"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary">
        Add Book
      </Button>
    </Paper>
  );
}
