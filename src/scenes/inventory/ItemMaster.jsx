import React from "react";
import MediaControlCard from "../global/MediaControlCard";
import { Box } from "@mui/material";
import StockLogo from "../../assets/Stock Value.png";
import Reorder from "../../assets/Reorder.png";
import OutOfStock from "../../assets/Out of stock.png";
// Define an array of data for the cards
const cardData = [
  {
    logo: StockLogo,
    companyName: "Stock Value",
    companyNameDetails: "RM over 60 days",
    currency1: "₹3,17,500",
  },
  {
    logo: StockLogo,
    companyName: "Stock Value",
    companyNameDetails: "PM over 60 days",
    currency1: "₹1,17,500",
  },
  {
    logo: Reorder,
    companyName: "Items Below Reorder Level",
    currency1: "10",
  },
  {
    logo: OutOfStock,
    companyName: "Items Out of Stock",
    currency1: "25",
  },
  // Add more objects if needed
];

function ItemMaster() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          // flexWrap: "wrap",
          mr: 20,
        }}
      >
        {cardData.map((item, index) => (
          <MediaControlCard
            key={index}
            logo={item.logo}
            companyName={item.companyName}
            companyNameDetails={item.companyNameDetails}
            currency1={item.currency1}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ItemMaster;
