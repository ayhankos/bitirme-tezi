import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import AdminNavbar from "./AdminNavbar";
import { fetchUsers } from "./fetchUsers"; // fetchUsers fonksiyonunu içe aktar
import theme from "../colors";

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
          fetchUsers();
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      };

      return (
        <>
          <Button
            variant="filled"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.tertiary.main,
            }}
            onClick={handleDelete}
          >
            Onayla Sil
          </Button>
        </>
      );
    },
  },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers(); // fetchUsers fonksiyonunu çağır
        setRows(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
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
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 50]}
          checkboxSelection
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
