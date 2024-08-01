import React, { useState } from "react";
import CustomTabs from "../global/CustomTabs";
import {
  Box,
  Button,
  Card,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  TextField,
  FormLabel,
  Paper,
} from "@mui/material";
import ItemMaster from "./ItemMaster";
import StockManagement from "./StockManagement";

const Inventory = () => {
  // const filteredData = tableData.filter((row) =>
  //   [row.itemCode, row.itemName, row.category].some((value) =>
  //     value.toLowerCase().includes(searchQuery)
  //   )
  // );

  const tabs = [
    { label: "Item Master", content: <ItemMaster /> },
    { label: "Stock Movement", content: <StockManagement /> },
  ];

  // Add the actions column as the last column

  return (
    <Box p={4} width={"auto"}>
      {/* tabs */}
      <CustomTabs tabs={tabs} defaultIndex={0} />
      {/* heading */}
    </Box>
  );
};

export default Inventory;
