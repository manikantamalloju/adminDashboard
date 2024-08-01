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
import { RiEditLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
// Define an array of data for the cards
import AddWareHouseModal from "./AddWareHouseModal";
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
import { LuEye } from "react-icons/lu";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { render } from "@testing-library/react";

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
      name: "Warehouse A",
      location: "New York",
      address: "123 Main St, New York, NY 10001",
      description: "Main warehouse in New York",
    },
    {
      name: "Warehouse B",
      location: "Los Angeles",
      address: "456 Elm St, Los Angeles, CA 90001",
      description: "Secondary warehouse in Los Angeles",
    },
    {
      name: "Warehouse C",
      location: "Chicago",
      address: "789 Oak St, Chicago, IL 60601",
      description: "Warehouse located in Chicago",
    },
    {
      name: "Warehouse D",
      location: "Houston",
      address: "101 Pine St, Houston, TX 77001",
      description: "Warehouse located in Houston",
    },
    {
      name: "Warehouse E",
      location: "Phoenix",
      address: "202 Birch St, Phoenix, AZ 85001",
      description: "Warehouse located in Phoenix",
    },
  ]);
  console.log(tableData, "tableData");
  const addInventoryData = (data) => {
    setTableData([...tableData, data]);
  };

  // Custom icons
  const TableIcons = {
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward style={{ color: "#F2F2F2" }} {...props} ref={ref} />
    )),
    // Add other icons as needed
  };

  const columns = [
    {
      title: "Name",
      field: "name",
      render: (rowData) => (
        <Link
          to={`/warehouses/${rowData.name}`}
          style={{ textDecoration: "none", color: "#6B54C8" }}
        >
          {rowData.name}
          <FaExternalLinkAlt color="#6B54C8" style={{ marginLeft: "10px" }} />
        </Link>
      ),
    },
    {
      title: "Location",
      field: "location",
    },
    { title: "Address", field: "address" },

    {
      title: "Description",
      field: "description",
    },
  ];

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
            sx={{
              border: "none",
              ":hover": {
                border: "none",
              },
            }}
          >
            <RiEditLine color="#E8B931" size={24} />
          </Button>
          <Button
            sx={{
              border: "none",
              ":hover": {
                border: "none",
              },
            }}
            onClick={() => alert(`Delete ${rowData.itemName}`)}
            variant="outlined"
          >
            <LuEye size={24} color="6B54C8" />
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
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%", m: 5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            m: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              fontSize={"24px"}
              fontWeight={700}
              fontFamily={getFontFamily("montserrat")}
              mr={1}
            >
              Warehouses
            </Typography>
            <IoIosInformationCircleOutline size={20} />
          </Box>

          <Button variant="contained" onClick={handleOpen}>
            Add Warehouse
          </Button>
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
      {open && (
        <AddWareHouseModal
          open={open}
          handleClose={handleClose}
          addInventoryData={addInventoryData}
        />
      )}
    </Box>
  );
}

export default WareHouses;
