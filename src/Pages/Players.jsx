import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Scroller from "../components/Scroller";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#ff0000",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const Players = () => {
  const [numOfPlayers, setNumOfPlayers] = useState(null);

  const handleNumOfPlayersChange = (num) => {
    // Handle the value of numOfPlayers here
    setNumOfPlayers(num);
    console.log("Selected number of players:", numOfPlayers);
  };
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Players;
