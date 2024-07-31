import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
import React from "react";

export default function WareHouses() {
  const [data, setData] = React.useState([]);

  return (
    <Box>
      <MaterialTable
        title="String Validation Preview"
        columns={[
          {
            title: "Name",
            field: "name",
            validate: (rowData) =>
              rowData.name === "" ? "Name cannot be empty" : "",
          },
          {
            title: "Surname",
            field: "surname",
            validate: (rowData) =>
              !rowData.surname || rowData.surname.length < 3
                ? "Surname must have at least 3 characters"
                : "",
          },
          {
            title: "Birth Year",
            field: "birthYear",
            type: "numeric",
            validate: (rowData) =>
              rowData.birthYear < 1900 ? "Birth year must be after 1900" : "",
          },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34,
          },
        ]}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData(dataUpdate);

                resolve();
              }, 1000);
            }),
        }}
        options={{
          search: false,
        }}
      />
    </Box>
  );
}
