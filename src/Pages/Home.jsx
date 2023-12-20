import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
      <Typography variant="h2" gutterBottom sx={{ marginTop: "6rem" }}>
        Pooler
      </Typography>
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
  );
};

export default Home;
