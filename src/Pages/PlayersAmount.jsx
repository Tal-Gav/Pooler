import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PlayersSlide from "../components/PlayersSlide";

const PlayersAmount = () => {
  const [amountOfPlayer, setAmountOfPlayers] = useState(null);

  const handlePlayersAmountChange = (playersSelected) => {
    setAmountOfPlayers(playersSelected);
  };
  return (
    <Grid container spacing={5} direction="column" alignItems="center">
      <Grid item xl={6} md={6} sm={12} xs={12} sx={{ marginTop: "10vh" }}>
        <Typography variant="h4" gutterBottom>
          How many players?
        </Typography>
      </Grid>
      <Grid item xl={6} md={6} sm={12} xs={12} sx={{ marginTop: "16vh" }}>
        <PlayersSlide onPlayersAmountChange={handlePlayersAmountChange} />
      </Grid>
      <Grid item xl={6} md={6} sm={12} xs={12} sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 28,
            fontSize: "1.2rem",
            width: "12rem",
            height: "4rem",
            color: "primary.main",
            marginTop: "7rem",
          }}
          component={Link} // Use the Link component from react-router-dom
          to={`/`} // Specify the path you want to link to
        >
          Back
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 28,
            fontSize: "1.2rem",
            width: "12rem",
            height: "4rem",
            color: "primary.main",
            marginTop: "7rem",
          }}
          component={Link} // Use the Link component from react-router-dom
          to={`/randomball/${amountOfPlayer}`} // Specify the path you want to link to
        >
          Start
        </Button>
      </Grid>
    </Grid>
  );
};

export default PlayersAmount;
