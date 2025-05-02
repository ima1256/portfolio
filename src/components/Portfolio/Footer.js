import { Box, Typography, Container, Link, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Socials from "./About/Socials";

const Footer = () => {
  const theme = useTheme();

  const name = "Imanol Conde González"

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        py: 3,
        px: 2,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={"center"}
          spacing={2}
        >
          {/* Left Side */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.primary.main,
                fontWeight: "bold",
              }}
            
            >
              {name}
            </Typography>
          </Box>

          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} | All rights reserved.
          </Typography>

          {/* Right Side - Links */}
          
          <Stack direction="row" spacing={3} className="items-center">
            <Socials />
            {/* <Link
              href="mailto:your.email@example.com"
              underline="hover"
              sx={{ color: theme.palette.secondary.main }}
            >
              Email
            </Link> */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
