import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import AdminNavbar from "./adminNavbar";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => {
      const handleDelete = async () => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("http://localhost:3001/users");
            if (!response.ok) {
              throw new Error("Failed to fetch users");
            }
            const data = await response.json();
            setRows(data);
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };

        const userId = params.row.id;
        try {
          const response = await fetch(
            `http://localhost:3001/users/${userId}`,
            {
              method: "DELETE",
            }
          );

          if (!response.ok) {
            throw new Error("Failed to delete user");
          }

          // Kullanıcı başarıyla silindi, kullanıcıları yeniden yükle
          fetchUsers();
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      };

      return (
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Onayla Sil
        </Button>
      );
    },
  },
];

export default function DataTable() {
  const [rows, setRows] = useState([]); // setRows'i tanımla

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setRows(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </Box>
    </>
  );
}
