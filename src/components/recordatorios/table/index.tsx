import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../data-table";

const RecordatoriosTable: React.FC<any> = ({ recordatorios, handlerClick }) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "cliente", headerName: "Cliente", minWidth: 150, maxWidth: 300 },
    { field: "factura", headerName: "Factura" },
    { field: "metodo", headerName: "Metodo", minWidth: 150, maxWidth: 200 },
    { field: "frecuencia", headerName: "Frecuencia" },
    { field: "status", headerName: "Estado" },
    { field: "fecha_creacion", headerName: "Fecha de Creacion", width: 150 },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          margin: "-16px -16px 16px -16px",
          padding: "5px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Listado de recordatorios aplicados
        </Typography>
      </Box>
      <DataTable rows={recordatorios} columns={columns} />
    </>
  );
};

export default RecordatoriosTable;
