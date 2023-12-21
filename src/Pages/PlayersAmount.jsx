import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PlayersSlide from "../components/PlayersSlide";

const PlayersAmount = () => {
  const [amountOfPlayer, setAmountOfPlayers] = useState(null);

  const handlePlayersAmountChange = (playersSelected) => {
    setAmountOfPlayers(playersSelected);
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 430,
        maxHeight: 932,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ marginTop: "6rem" }}>
        How many players?
      </Typography>
      <Box sx={{ marginTop: "14rem" }}>
        <PlayersSlide onPlayersAmountChange={handlePlayersAmountChange} />
      </Box>

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
    </Box>
  );
};

export default PlayersAmount;
