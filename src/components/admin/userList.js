import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import AdminNavbar from "./AdminNavbar";
import { fetchUsers } from "./fetchUsers"; // fetchUsers fonksiyonunu içe aktar

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

          // Silme işlemi başarılı olduysa, kullanıcı listesini güncelleyin
          const updatedRows = rows.filter((user) => user.id !== userId);
          setRows(updatedRows);
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
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        setRows(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []); // Boş bağımlılık dizisi kullanarak yalnızca bileşenin monte edildiğinde çalışmasını sağlayın

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
