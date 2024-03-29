import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import AdminNavbar from "./AdminNavbar";
import { fetchUserEvents } from "./fetchUserEvents";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "registration_date", headerName: "Registration Date", width: 150 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "title", headerName: "Title", width: 200 },
];

export default function Başvurular() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const data = await fetchUserEvents();
        setRows(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEventData();
  }, []);

  return (
    <>
      <AdminNavbar />
      <Box
        sx={{
          height: 600,
          width: "96%",
          margin: "20px auto",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 50]}
          checkboxSelection={true}
          sx={{
            borderRadius: 12,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            "& .MuiDataGrid-row": {
              height: 55, // Artırılmış satır yüksekliği
            },
            "& .MuiDataGrid-columnsContainer": {
              borderRadius: "inherit",
            },
          }}
        />
      </Box>
    </>
  );
}
