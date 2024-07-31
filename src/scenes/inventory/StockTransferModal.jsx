import React from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import { getFontFamily } from "../../utils";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modalContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    outline: "none",
  },
}));

const validationSchema = Yup.object({
  itemCode: Yup.string().required("Item Code is required"),
  itemName: Yup.string().required("Item Name is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  subCategory: Yup.string().required("Sub Category is required"),
  baseUnit: Yup.string().required("Base Unit is required"),
  alternateUnit: Yup.string().required("Alternate Unit is required"),
  pricingUnits: Yup.string().required("Pricing Units is required"),
  minStockLevel: Yup.number()
    .required("Min. Stock Level is required")
    .positive("Min. Stock Level must be positive"),
  maxStockLevel: Yup.number()
    .required("Max. Stock Level is required")
    .positive("Max. Stock Level must be positive"),
  safetyStockLevel: Yup.number()
    .required("Safety Stock Level is required")
    .positive("Safety Stock Level must be positive"),
  preferredSupplier: Yup.string().required("Preferred Supplier is required"),
  reorderQuantity: Yup.number()
    .required("Reorder Quantity is required")
    .positive("Reorder Quantity must be positive"),
  leadTime: Yup.number()
    .required("Lead Time is required")
    .positive("Lead Time must be positive"),
});

const StockTransferModal = (props) => {
  const { open, handleClose, addInventoryData } = props;
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      itemCode: "",
      itemName: "",
      description: "",
      category: "",
      subCategory: "",
      baseUnit: "",
      alternateUnit: "",
      pricingUnits: "",
      minStockLevel: "",
      maxStockLevel: "",
      safetyStockLevel: "",
      preferredSupplier: "",
      reorderQuantity: "",
      leadTime: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("Form submitted");
      console.log(values, "formik");
      // handle form submission
      addInventoryData({
        itemCode: "F006",
        itemName: "fffff F",
        category: "Electronics",
        currentStockLevel: 90,
        recorderStockLevel: 40,
        uom: "pcs",
        location: "F6",
        batchLot: "G678",
        expiryDate: "2024-09-30",
        status: "Low",
      });
    },
  });

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
            width: 500,
            padding: 2,
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <h2>Add Item</h2>
        </Box>
      </Box>
    </Modal>
  );
};

export default StockTransferModal;
