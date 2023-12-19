import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useParams } from "react-router-dom"; // Import Link from react-router-dom
import { useState } from "react";
import Ball from "../components/Ball";

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

const RandomBall = () => {
  const { numOfPlayers } = useParams();

  const getRandomBalls = (playersLength) => {
    const chosenBalls = new Set(); // Using a Set to store unique numbers
    while (chosenBalls.size < playersLength) {
      const randomBall = Math.floor(Math.random() * 15) + 1; // Generate a random number between 1 and 15
      chosenBalls.add(randomBall); // Add the number to the Set (ensures uniqueness)
    }
    return Array.from(chosenBalls); // Convert the Set to an array and return
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
        <Typography variant="h2" gutterBottom sx={{ marginTop: "6rem" }}>
          Random Ball
        </Typography>
        <div>
          {/* Render a div for each random ball */}
          {getRandomBalls(numOfPlayers).map((ball, index) => (
            <Ball key={index} randomBall={ball} player={`${index + 1}`} />
          ))}
        </div>
        <Link to="/players">
          <Button
            variant="outlined"
            sx={{
              borderRadius: 28,
              width: "12rem",
              height: "4rem",
              color: "primary.main",
              marginTop: "33rem",
            }}
          >
            Start
          </Button>
        </Link>
      </Box>
    </ThemeProvider>
  );
};

export default RandomBall;