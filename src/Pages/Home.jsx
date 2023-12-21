import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 430,
        maxHeight: 932,
        textAlign: "center",
      }}
    >
      <div className="portfolio-experiment">
        <Typography
          className="experiment-title"
          variant="h2"
          gutterBottom
          sx={{ marginTop: "6rem" }}
        >
          Pooler
        </Typography>
      </div>

      <Button
        variant="outlined"
        sx={{
          borderRadius: 28,
          fontSize: "1.2rem",
          width: "12rem",
          height: "4rem",
          color: "primary.main",
          marginTop: "26rem",
        }}
        component={Link} // Use the Link component from react-router-dom
        to="/players" // Specify the path you want to link to
      >
        Let's Go
      </Button>
    </Box>
  );
};

export default Home;
