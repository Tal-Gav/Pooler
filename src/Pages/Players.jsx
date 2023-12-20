import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Scroller from "../components/Scroller";

const Players = () => {
  const [numOfPlayers, setNumOfPlayers] = useState(null);

  const handleNumOfPlayersChange = (num) => {
    // Handle the value of numOfPlayers here
    setNumOfPlayers(num);
    console.log("Selected number of players:", numOfPlayers);
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
        <Scroller onNumOfPlayersChange={handleNumOfPlayersChange} />
      </Box>

      <Link to={`/randomball/${numOfPlayers}`}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 28,
            width: "12rem",
            height: "4rem",
            color: "primary.main",
            marginTop: "13.5rem",
          }}
        >
          Start
        </Button>
      </Link>
    </Box>
  );
};

export default Players;
