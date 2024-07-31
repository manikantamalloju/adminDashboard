import React from "react";
import { TablePagination } from "@mui/material";
import { useTable } from "material-table";

const CustomPagination = ({
  page,
  count,
  onChangePage,
  rowsPerPage,
  onChangeRowsPerPage,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
      />
    </div>
  );
};

export default CustomPagination;
