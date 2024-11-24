"use client";

import { usePathname } from "next/navigation";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { data } from "../../../data";
// import { LocalPerson } from '@/components/Profile';

export default function Character() {
  const pathname = usePathname();
  const id = pathname.slice(pathname.lastIndexOf("/") + 1);
  const person = data[`people/${id}`];

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        py: 4,
        px: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          margin: "auto",
          boxShadow: 3,
          backgroundColor: "#1e1e1e",
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {person.name}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Height:</Typography>
              <Typography>{person.height} cm</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Weight:</Typography>
              <Typography>{person.mass} kg</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Hair Color:</Typography>
              <Typography>{person.hair_color}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Skin Color:</Typography>
              <Typography>{person.skin_color}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Eye Color:</Typography>
              <Typography>{person.eye_color}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Birth Year:</Typography>
              <Typography>{person.birth_year}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Gender:</Typography>
              <Typography>{person.gender}</Typography>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Created:</Typography>
              <Typography>
                {new Date(person.created).toLocaleString()}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Edited:</Typography>
              <Typography>
                {new Date(person.edited).toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
