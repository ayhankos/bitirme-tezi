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
      <Box sx={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          sx={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            marginX: "2%",
            border: "1px solid #D1D5DB",
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
              fontSize: "14px",
              color: theme.palette.secondary.main,
            },
            "& .MuiDataGrid-cell": {
              fontSize: "14px",
              color: theme.palette.text.primary,
            },
            "& .MuiDataGrid-row": {
              cursor: "pointer",
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            },
            "& .MuiDataGrid-footerContainer": {
              padding: "10px",
              borderTop: "1px solid #D1D5DB",
            },
            "& .MuiDataGrid-iconButtonContainer": {
              padding: "0 5px",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "18px",
            },
            "& .MuiDataGrid-pagination": {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 0",
            },
            "& .MuiDataGrid-pageSizeSelect": {
              marginRight: "10px",
              "& .MuiSelect-select": {
                padding: "5px",
                borderRadius: "4px",
                "&:focus": {
                  backgroundColor: "white",
                },
              },
            },
            "& .MuiDataGrid-paginationSelect": {
              borderRadius: "4px",
              padding: "5px",
              "&:focus": {
                backgroundColor: "white",
              },
            },
          }}
        />
      </Box>
    </>
  );
}
