import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import AdminNavbar from "./adminNavbar";
import theme from "../colors";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "user_id", headerName: "User ID", width: 130 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "registration_date", headerName: "Registration Date", width: 150 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => {
      const handleDelete = async () => {
        const eventId = params.row.id;
        try {
          const response = await fetch(
            `http://localhost:3001/events/${eventId}`,
            {
              method: "DELETE",
            }
          );

          if (!response.ok) {
            throw new Error("Failed to delete event");
          }

          // Silme işlemi başarılı olduysa, etkinlik listesini güncelleyin
          fetchUserApplications();
        } catch (error) {
          console.error("Error deleting event:", error);
        }
      };

      return (
        <Button
          variant="filled"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.tertiary.main,
          }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      );
    },
  },
];

export default function EventTable() {
  const [userApplications, setUserApplications] = useState([]);

  useEffect(() => {
    const fetchUserApplications = async () => {
      try {
        const response = await fetch("http://localhost:3001/user-applications");
        if (!response.ok) {
          throw new Error("Failed to fetch user applications");
        }
        const data = await response.json();
        setUserApplications(data);
      } catch (error) {
        console.error("Error fetching user applications:", error);
      }
    };

    fetchUserApplications();
  }, []);

  return (
    <>
      <AdminNavbar />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={userApplications}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </Box>
    </>
  );
}
