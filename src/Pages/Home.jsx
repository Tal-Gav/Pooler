import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Grid container spacing={5} direction="column" alignItems="center">
      <Grid item xl={6} md={6} sm={12} xs={12} sx={{ marginTop: "10vh" }}>
        <div className="portfolio-experiment">
          <Typography className="experiment-title" variant="h2" gutterBottom>
            Pooler
          </Typography>
        </div>
      </Grid>
      <Grid item xl={6} md={6} sm={12} xs={12} sx={{ marginTop: "45vh" }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 28,
            fontSize: "1.2rem",
            width: "12rem",
            height: "4rem",
            color: "primary.main",
          }}
          component={Link} // Use the Link component from react-router-dom
          to="/players" // Specify the path you want to link to
        >
          Let's Go
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
