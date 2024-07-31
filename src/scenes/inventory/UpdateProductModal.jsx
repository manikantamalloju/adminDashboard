import React, { useState } from "react";
import {
  Modal,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MaterialTable from "material-table";
import { getFontFamily } from "../../utils";
import { FaExternalLinkAlt } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  modalContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    outline: "none",
  },
}));

const UpdatedProductModal = (props) => {
  const { open, handleClose, addInventoryData } = props;
  const classes = useStyles();
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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modalContent}>
        <Box
          sx={{
            width: "50%",
            padding: 2,
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <h2>Update Item Stock</h2>
          <Box sx={{ borderRadius: 50 }}>
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
                // paginationType: "normal", // You can specify different pagination types if needed
                // pageSizeOptions: [10, 20, 30], // Customize page size options if needed
              }}
              // icons={TableIcons}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdatedProductModal;
