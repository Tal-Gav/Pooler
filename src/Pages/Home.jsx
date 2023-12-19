import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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

const Home = () => {
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
    </ThemeProvider>
  );
};

export default Home;
