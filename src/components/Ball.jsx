import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import React, { useState } from "react";
import shh from "../assets/shh.png";

const Ball = ({ randomBall, player }) => {
  const [ballVal, setBallVal] = useState("hidden");
  const [isHidden, setIsHidden] = useState(true);

  const showRandomBall = () => {
    setBallVal(randomBall);
    setIsHidden(false);
  };
  const hideRandomBall = () => {
    setBallVal("hidden");
    setIsHidden(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 430,
        maxHeight: 932,
        textAlign: "center",
        display: "flex",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ marginTop: "2rem" }}>
        <PermIdentityIcon sx={{ fontSize: "1.2rem", marginRight: "0.4rem" }} />
        {`#${player} - Ball: `}
        {isHidden ? (
          <img src={shh} alt="Hidden" style={{ width: "1.1rem" }} />
        ) : (
          ballVal
        )}
      </Typography>
      <Button
        // onClick={showRandomBall}
        onTouchStart={showRandomBall}
        onTouchEnd={hideRandomBall}
        onMouseDown={showRandomBall}
        onMouseUp={hideRandomBall}
        variant="outlined"
        sx={{
          marginTop: "2rem",
          borderRadius: 28,
          width: "7rem",
          height: "3rem",
          color: "primary.main",
          fontSize: "1.2rem",
          right: "1rem",
          position: "absolute",
        }}
      >
        {isHidden ? "show" : "hide"}
      </Button>
    </Box>
  );
};

export default Ball;
