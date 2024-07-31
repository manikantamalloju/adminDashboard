import React, { useState } from "react";
import MediaControlCard from "../global/MediaControlCard";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import StockLogo from "../../assets/Stock Value.png";
import Reorder from "../../assets/Reorder.png";
import OutOfStock from "../../assets/Out of stock.png";
// Define an array of data for the cards

import DropDownButton from "../global/DropDownButton";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MaterialTable from "material-table";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { getFontFamily } from "../../utils";
import { FaPlus } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { forwardRef } from "react";
import { ArrowDownward, ArrowUpward, Search } from "@mui/icons-material";
import CustomPagination from "../global/CustomPagination";
import UpdateProductStock from "../../assets/Update Stock.png";
import StockTransfer from "../../assets/Stock Transfer.png";
import ItemCategory from "../../assets/Categories.png";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CustomSortArrow = ({ direction }) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    {direction === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
  </Box>
);
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

// Custom styles for the footer
const footerStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: "#f5f5f5", // Optional: adjust background color if needed
};

function WareHouses() {
  const [open, setOpen] = React.useState(false);
  const [updatedProductOpen, setUpdatedProductOpen] = React.useState(false);
  const [stockTransferOpen, setStockTransferOpen] = React.useState(false);
  const [ItemCategoryOpen, setItemCategoryOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedColumns, setSelectedColumns] = useState([
    "itemCode",
    "itemName",
    "category",
    "currentStockLevel",
    "recorderStockLevel",
    "uom",
    "location",
    "batchLot",
    "expiryDate",
    "status",
  ]);
  const [tableData, setTableData] = useState([
    {
      itemCode: "A001",
      itemName: "Product A",
      category: "Electronics",
      currentStockLevel: 150,
      recorderStockLevel: 50,
      uom: "pcs",
      location: "A1",
      batchLot: "B123",
      expiryDate: "2025-06-30",
      status: "In Stock",
    },
    {
      itemCode: "B002",
      itemName: "Product B",
      category: "Electronics",
      currentStockLevel: 75,
      recorderStockLevel: 30,
      uom: "pcs",
      location: "B2",
      batchLot: "C456",
      expiryDate: "2024-12-15",
      status: "Low",
    },
    {
      itemCode: "C003",
      itemName: "Product C",
      category: "Home Goods",
      currentStockLevel: 200,
      recorderStockLevel: 100,
      uom: "pcs",
      location: "C3",
      batchLot: "D789",
      expiryDate: "2026-03-20",
      status: "In Stock",
    },
    {
      itemCode: "D004",
      itemName: "Product D",
      category: "Tools",
      currentStockLevel: 50,
      recorderStockLevel: 20,
      uom: "pcs",
      location: "D4",
      batchLot: "E012",
      expiryDate: "2024-11-05",
      status: "Low",
    },
    {
      itemCode: "E005",
      itemName: "Product E",
      category: "Accessories",
      currentStockLevel: 120,
      recorderStockLevel: 60,
      uom: "pcs",
      location: "E5",
      batchLot: "F345",
      expiryDate: "2025-08-25",
      status: "In Stock",
    },
    {
      itemCode: "F006",
      itemName: "Product F",
      category: "Electronics",
      currentStockLevel: 90,
      recorderStockLevel: 40,
      uom: "pcs",
      location: "F6",
      batchLot: "G678",
      expiryDate: "2024-09-30",
      status: "Low",
    },
  ]);
  console.log(tableData, "tableData");
  const addInventoryData = (data) => {
    setTableData([...tableData, data]);
  };
  const menuItems = [
    {
      text: (
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              fontFamily: "montserrat",
              color: "#333333",
            }}
          >
            Update Product Stock
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: "300",
              fontFamily: "montserrat",
              color: "#333333",
            }}
          >
            Add or reduce item quantity in bulk
          </Typography>
        </Box>
      ),
      icon: (
        <img
          src={UpdateProductStock}
          alt="Update Product Stock"
          style={{ width: 32, height: 32, marginRight: 5 }}
        />
      ),
      action: () => setUpdatedProductOpen(true),
    },
    {
      text: (
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              fontFamily: "montserrat",
              color: "#333333",
            }}
          >
            Stock Transfer
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: "300",
              fontFamily: "montserrat",
              color: "#333333",
            }}
          >
            Transfer your stock between stores
          </Typography>
        </Box>
      ),
      icon: (
        <img
          src={StockTransfer}
          alt=" Stock Transfer"
          style={{ width: 32, height: 32, marginRight: 5 }}
        />
      ),
      action: () => setStockTransferOpen(true),
    },
    {
      text: (
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              fontFamily: "montserrat",
              color: "#333333",
            }}
          >
            Item Categories (Add/Edit)
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: "300",
              fontFamily: "montserrat",
              color: "#333333",
            }}
          >
            Create multiple categories for your items
          </Typography>
        </Box>
      ),
      icon: (
        <img
          src={ItemCategory}
          alt="Item Categories"
          style={{ width: 32, height: 32, marginRight: 5 }}
        />
      ),
      action: () => setItemCategoryOpen(true),
    },
  ];

  const selectOptions = {
    category: ["All", "Electronics", "Home Goods", "Tools", "Accessories"],
    supplier: [
      "All",
      "Abstergo Ltd.",
      "Barone LLC.",
      "Biffco Enterprises Ltd.",
      "Caterpillar Inc.",
      "Dell Corp.",
    ],
    location: ["All", "A1", "B2", "C3", "D4", "E5", "F6"],
    status: ["All", "In Stock", "Low"],
    columns: [
      "itemCode",
      "itemName",
      "category",
      "currentStockLevel",
      "recorderStockLevel",
      "uom",
      "location",
      "batchLot",
      "expiryDate",
      "status",
    ],
  };

  const handleColumnChange = (event) => {
    setSelectedColumns(event.target.value);
  };

  // Custom icons
  const TableIcons = {
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward style={{ color: "#F2F2F2" }} {...props} ref={ref} />
    )),
    // Add other icons as needed
  };

  const renderSelect = (label, options, value = ["All"], onChange) => {
    // Ensure "All" is included as an option
    const updatedOptions = [...options];
    return (
      <Box sx={{ width: "15%", marginRight: "10px", mb: 2 }}>
        <FormLabel
          sx={{
            ml: 1,
            fontFamily: getFontFamily("montserrat"),
            color: "#333333",
          }}
        >
          {label}
        </FormLabel>
        <FormControl
          fullWidth
          sx={{
            height: 40,
            backgroundColor: "white",
            borderRadius: 2,
          }}
        >
          {/* <InputLabel>{label}</InputLabel> */}
          <Select
            multiple={label === "Show/Hide Columns"}
            value={value}
            onChange={onChange}
            renderValue={(selected) => {
              if (Array.isArray(selected) && selected.length === 0) {
                return "All"; // Display "All" if nothing is selected
              }
              return Array.isArray(selected) ? selected.join(", ") : selected;
            }}
            sx={{
              borderRadius: 2,
              height: "100%",
              "& .MuiOutlinedInput-root": { borderRadius: 2 },
            }}
          >
            {updatedOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {label === "Show/Hide Columns" && option !== "All" && (
                  <Checkbox checked={value.indexOf(option) > -1} />
                )}
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  };

  const columns = [
    {
      title: "Item Code",
      field: "itemCode",
      filtering: true,
      render: (rowData) => (
        <div style={{ paddingRight: "16px" }}>{rowData.itemCode}</div>
      ),
    },
    {
      title: "Item Name",
      field: "itemName",
      filtering: true,

      render: (rowData) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            style={{
              color: "#6B54C8",
              fontFamily: getFontFamily("montserrat"),
            }}
            // to={`/inventory/${rowData.itemCode}`}
          >
            {rowData.itemName}
            <FaExternalLinkAlt color="#6B54C8" style={{ marginLeft: "10px" }} />
          </Typography>
        </Box>
      ),
    },
    { title: "Category", field: "category", filtering: true },
    {
      title: "Current Stk. Level",
      field: "currentStockLevel",
      sorting: true,
      filtering: false,
    },
    {
      title: "Reorder Stk. Lvl.",
      field: "reorderStockLevel",
      sorting: true,
      filtering: false,
    },
    { title: "UOM", field: "uom", sorting: true, filtering: false },
    { title: "Loc.", field: "location", sorting: true, filtering: false },
    {
      title: "Batch/Lot #",
      field: "batchLot",
      sorting: true,
      filtering: false,
    },
    {
      title: "Expiry Date",
      field: "expiryDate",
      sorting: true,
      filtering: false,
    },
    { title: "Status", field: "status", filtering: false },
  ]
    .filter((column) => selectedColumns.includes(column.field))
    .map((column) => ({ ...column, sortable: column.sorting !== false }));

  const finalColumns = [
    ...columns,
    {
      title: "Actions",
      field: "actions",
      render: (rowData) => (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={() => alert(`Edit ${rowData.itemName}`)}
            variant="outlined"
            color="primary"
          >
            Edit
          </Button>
          <Button
            onClick={() => alert(`Delete ${rowData.itemName}`)}
            variant="outlined"
            color="secondary"
            sx={{ ml: 1 }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        mr: 20,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            m: 2,
          }}
        >
          <Typography
            variant="h6"
            fontSize={"24px"}
            fontWeight={700}
            fontFamily={getFontFamily("montserrat")}
          >
            Stock Movement
          </Typography>
        </Box>
        {/* cards */}
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "lightgrey",
            padding: "16px",
            borderRadius: 5,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            {renderSelect("Category", selectOptions.category)}
            {renderSelect("Supplier", selectOptions.supplier)}
          </Box>
          <Box sx={{ borderRadius: 50, width: "100%" }}>
            <MaterialTable
              title="" // Remove table title
              columns={finalColumns}
              data={tableData}
              options={{
                sorting: true,
                search: false,
                headerStyle: {
                  backgroundColor: "#44488C",
                  color: "#FFF",
                  fontFamily: getFontFamily("montserrat"),
                  padding: "20px",
                  paddingRight: "20px",
                },
                toolbar: false, // Remove the toolbar which may include the title
                padding: "dense",
                paginationType: "normal", // You can specify different pagination types if needed
                pageSizeOptions: [10, 20, 30], // Customize page size options if needed
              }}
              icons={TableIcons}
              components={{
                Pagination: (props) => (
                  <CustomPagination
                    page={props.page}
                    count={props.count}
                    onChangePage={props.onChangePage}
                    rowsPerPage={props.rowsPerPage}
                    onChangeRowsPerPage={props.onChangeRowsPerPage}
                  />
                ),
              }}
            />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default WareHouses;
