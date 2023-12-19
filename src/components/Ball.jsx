import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const Ball = ({ randomBall, player }) => {
  const [ballVal, setBallVal] = useState("hidden");
  const [isHidden, setIsHidden] = useState(true);
  const showRandomBall = () => {
    setBallVal(randomBall);
    setIsHidden(!isHidden);
  };
  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginTop: "2rem" }}
      >{`Player #${player} --- Ball: ${
        isHidden ? "hidden" : ballVal
      }`}</Typography>
      <Button
        onClick={showRandomBall}
        variant="outlined"
        sx={{
          borderRadius: 28,
          width: "4rem",
          height: "2rem",
          color: "primary.main",
        }}
      >
        {isHidden ? "show" : "hide"}
      </Button>
    </>
  );
};

export default Ball;
