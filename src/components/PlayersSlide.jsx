import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const PlayersSlide = ({ onPlayersAmountChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const playersRange = Array.from({ length: 15 }, (_, index) => index + 1); // Array 1-15

  const handleSlideChange = (curr_slide_index) => {
    setCurrentSlide(curr_slide_index);
    onPlayersAmountChange(curr_slide_index + 1); // Pass the current slide index to the parent component
  };
  useEffect(() => {
    // Call onPlayersAmountChange with the initial slide index when the component mounts
    onPlayersAmountChange(currentSlide + 1);
  }, [onPlayersAmountChange]); // Run this effect only once when the component mounts

  return (
    <Carousel
      selectedItem={currentSlide}
      onChange={handleSlideChange}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      width={"50vh"}
    >
      {playersRange.map((number) => (
        <Typography
          variant="h2"
          gutterBottom
          sx={{ marginTop: "3rem" }}
          key={number}
        >
          {number}
        </Typography>
      ))}
    </Carousel>
  );
};
export default PlayersSlide;
