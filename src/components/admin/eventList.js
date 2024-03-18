import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

import theme from "../colors";
import { fetchEvents } from "./fetchEvents";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
  { field: "date", headerName: "Date", width: 150 },
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
          fetchEvents();
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
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={events}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </Box>
    </>
  );
}
