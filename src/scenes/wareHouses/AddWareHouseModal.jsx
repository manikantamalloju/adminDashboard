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
  Divider,
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
  name: Yup.string().required("Name is required"),
  location: Yup.string().required("Location is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  addressLine2: Yup.string().required("Address Line 2 is required"),
  pincode: Yup.string().required("Pincode is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
});

const AddWareHouseModal = (props) => {
  const { open, handleClose, addInventoryData } = props;
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("Form submitted");
      console.log(values, "formik");
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
          <h2>Add New Warehouse</h2>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Name"
                  required
                  variant="outlined"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Location"
                  variant="outlined"
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
                <Typography>Address</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Address Line 1"
                  variant="outlined"
                  name="addressLine1"
                  value={formik.values.addressLine1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.addressLine1 &&
                    Boolean(formik.errors.addressLine1)
                  }
                  helperText={
                    formik.touched.addressLine1 && formik.errors.addressLine1
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Address Line 2"
                  variant="outlined"
                  name="addressLine2"
                  value={formik.values.addressLine2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.addressLine2 &&
                    Boolean(formik.errors.addressLine2)
                  }
                  helperText={
                    formik.touched.addressLine2 && formik.errors.addressLine2
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Pincode"
                  variant="outlined"
                  name="pincode"
                  value={formik.values.pincode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.pincode && Boolean(formik.errors.pincode)
                  }
                  helperText={formik.touched.pincode && formik.errors.pincode}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="City"
                  variant="outlined"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="State"
                  variant="outlined"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Country"
                  variant="outlined"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
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

export default AddWareHouseModal;
