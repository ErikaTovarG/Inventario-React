import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import styles from "./Table.module.css"

export default function Table() {
    const columns = [
        { field: "id", headerName: "ID", flex: 0.2 },
        {
          field: "name",
          headerName: "Name",
          flex: 0.2,
        },
        {
          field: "last_name",
          headerName: "Last_name",
          flex: 0.2,
        },
        {
          field: "position",
          headerName: "Position",
          flex: 0.2,
        },
      ];
      const rows = [
        { id: 1, name: "Snow", last_name: "Jon", position: "Analista" },
        { id: 2, name: "Sinia", last_name: "Bluh", position: "AnalistaJefe" },
        { id: 3, name: "Thiago", last_name: "Jon", position: "Analista" },
        { id: 4, name: "Lara", last_name: "Bluh", position: "AnalistaJefe" },
        { id: 5, name: "Thiago", last_name: "Jon", position: "Analista" },
        { id: 6, name: "Lara", last_name: "Bluh", position: "AnalistaJefe" },
      ];
  return (
    <article className={styles.table}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
    </article>
  )
}
