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

const ItemCategoryModal = (props) => {
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
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Item Code"
                  required
                  variant="outlined"
                  name="itemCode"
                  value={formik.values.itemCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.itemCode && Boolean(formik.errors.itemCode)
                  }
                  helperText={formik.touched.itemCode && formik.errors.itemCode}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Item Name"
                  variant="outlined"
                  name="itemName"
                  value={formik.values.itemName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.itemName && Boolean(formik.errors.itemName)
                  }
                  helperText={formik.touched.itemName && formik.errors.itemName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Category</InputLabel>
                  <Select
                    label="Category"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.category && Boolean(formik.errors.category)
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Category 1</MenuItem>
                    <MenuItem value={20}>Category 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Sub Category"
                  variant="outlined"
                  name="subCategory"
                  value={formik.values.subCategory}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subCategory &&
                    Boolean(formik.errors.subCategory)
                  }
                  helperText={
                    formik.touched.subCategory && formik.errors.subCategory
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Base Unit</InputLabel>
                  <Select
                    label="Base Unit"
                    name="baseUnit"
                    value={formik.values.baseUnit}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.baseUnit && Boolean(formik.errors.baseUnit)
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Unit 1</MenuItem>
                    <MenuItem value={20}>Unit 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Alternate Unit</InputLabel>
                  <Select
                    label="Alternate Unit"
                    name="alternateUnit"
                    value={formik.values.alternateUnit}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.alternateUnit &&
                      Boolean(formik.errors.alternateUnit)
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Unit 1</MenuItem>
                    <MenuItem value={20}>Unit 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Pricing Unit"
                  variant="outlined"
                  name="pricingUnits"
                  value={formik.values.pricingUnits}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.pricingUnits &&
                    Boolean(formik.errors.pricingUnits)
                  }
                  helperText={
                    formik.touched.pricingUnits && formik.errors.pricingUnits
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Min Stock Level"
                  variant="outlined"
                  name="minStockLevel"
                  value={formik.values.minStockLevel}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.minStockLevel &&
                    Boolean(formik.errors.minStockLevel)
                  }
                  helperText={
                    formik.touched.minStockLevel && formik.errors.minStockLevel
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Max Stock Level"
                  variant="outlined"
                  name="maxStockLevel"
                  value={formik.values.maxStockLevel}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.maxStockLevel &&
                    Boolean(formik.errors.maxStockLevel)
                  }
                  helperText={
                    formik.touched.maxStockLevel && formik.errors.maxStockLevel
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Safety Stock Level"
                  variant="outlined"
                  name="safetyStockLevel"
                  value={formik.values.safetyStockLevel}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.safetyStockLevel &&
                    Boolean(formik.errors.safetyStockLevel)
                  }
                  helperText={
                    formik.touched.safetyStockLevel &&
                    formik.errors.safetyStockLevel
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Preferred Supplier</InputLabel>
                  <Select
                    label="Preferred Supplier"
                    name="preferredSupplier"
                    value={formik.values.preferredSupplier}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.preferredSupplier &&
                      Boolean(formik.errors.preferredSupplier)
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Supplier 1</MenuItem>
                    <MenuItem value={20}>Supplier 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Reorder Quantity"
                  variant="outlined"
                  name="reorderQuantity"
                  value={formik.values.reorderQuantity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.reorderQuantity &&
                    Boolean(formik.errors.reorderQuantity)
                  }
                  helperText={
                    formik.touched.reorderQuantity &&
                    formik.errors.reorderQuantity
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Lead Time"
                  variant="outlined"
                  type="number"
                  name="leadTime"
                  value={formik.values.leadTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.leadTime && Boolean(formik.errors.leadTime)
                  }
                  helperText={formik.touched.leadTime && formik.errors.leadTime}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">D</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center", m: 4 }}>
                <Button
                  variant="outlined"
                  sx={{
                    marginRight: 1,
                    borderRadius: "16px",
                    width: "170px",
                    height: "30px",
                    border: "2px solid ##333333",
                    fontFamily: getFontFamily("montserrat"),
                    borderColor: "#333333", // Border color
                    bgcolor: "#F2F2F2", // Background color for Cancel
                  }}
                  onClick={handleClose}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontFamily: getFontFamily("montserrat"),
                    }}
                  >
                    Cancel
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "16px",
                    width: "170px",
                    height: "30px",
                    borderColor: "primary.main", // Border color
                    bgcolor: "#6B54C8", // Background color for Save
                    fontFamily: getFontFamily("montserrat"),
                    "&:hover": {
                      bgcolor: "primary.dark", // Background color on hover
                      borderColor: "primary.dark", // Darker border color on hover
                    },
                  }}
                  type="submit"
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontFamily: getFontFamily("montserrat"),
                    }}
                  >
                    Save
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default ItemCategoryModal;
