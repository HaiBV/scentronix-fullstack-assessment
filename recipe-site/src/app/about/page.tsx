import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function AboutPage() {
  return (
    <Box component="main" sx={{ display: "flex", gap: 5, maxWidth: "1200px", mx: "auto", mt: 5 }}>
      <Box sx={{ flex: 1 }}>
        <Box component="header">
          <Typography variant="h2" sx={{ mt: 2, fontWeight: "bold" }}>
            About Page
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
