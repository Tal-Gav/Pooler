import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Typography from "@mui/material/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Scroller = ({ onNumOfPlayersChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to store the current slide index

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    onNumOfPlayersChange(index + 1); // Pass the current slide index to the parent component
  };
  useEffect(() => {
    // Call onNumOfPlayersChange with the initial slide index when the component mounts
    onNumOfPlayersChange(currentSlide + 1);
  }, [onNumOfPlayersChange]); // Run this effect only once when the component mounts

  return (
    <Carousel
      selectedItem={currentSlide}
      onChange={handleSlideChange}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      sx={{ marginTop: "3rem" }}
    >
      <Typography variant="h2" gutterBottom sx={{ marginTop: "3rem" }}>
        1
      </Typography>
      <Typography variant="h2" gutterBottom sx={{ marginTop: "3rem" }}>
        2
      </Typography>
      <Typography variant="h2" gutterBottom sx={{ marginTop: "3rem" }}>
        3
      </Typography>
      <Typography variant="h2" gutterBottom sx={{ marginTop: "3rem" }}>
        4
      </Typography>
      <Typography variant="h2" gutterBottom sx={{ marginTop: "3rem" }}>
        5
      </Typography>
      <Typography variant="h2" gutterBottom sx={{ marginTop: "3rem" }}>
        6
      </Typography>
    </Carousel>
  );
};
export default Scroller;
