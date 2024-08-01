import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getFontFamily } from "../../utils";

export default function MediaControlCard({
  logo,
  companyName,
  currency1,
  companyNameDetails = false,
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        // width: "320px",
        height: "100px",
        // p: 2,
        // mr: 5,
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add box shadow
        borderRadius: 4, // Optional: Add border radius for rounded corners
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "70%", m: 2 }}>
        {/* Logo and Text */}
        <CardMedia
          component="img"
          sx={{ width: 50, height: 40, mr: 2 }} // Smaller logo size
          image={logo}
          alt="Logo"
        />
        <Box sx={{ width: "100%", mr: 2 }}>
          <Typography
            fontFamily={"Montserrat"}
            fontWeight={400}
            sx={{
              whiteSpace: "normal",
              overflow: "hidden",
              textOverflow: "ellipsis",
              mb: 0.5,
              color: "#333333",
            }}
          >
            {companyName}
          </Typography>
          {companyNameDetails && (
            <Typography
              fontSize={"12px"}
              fontWeight={700}
              fontFamily={"Montserrat"}
              color={"#E8B931"}
              width={"100px"}
            >
              {companyNameDetails}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
          <Typography
            variant="h6"
            fontSize={"24px"}
            fontWeight={700}
            fontFamily={getFontFamily("montserrat")}
          >
            {currency1}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
