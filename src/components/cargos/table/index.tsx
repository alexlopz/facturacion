import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../data-table";
import { Box, Button, Typography } from "@mui/material";

const CargosTable: React.FC<any> = ({ cargos, handlerClick }) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 75 },
    { field: "cliente", headerName: "Cliente", width: 200 },
    { field: "factura", headerName: "No. Factura", width: 100 },
    { field: "concepto", headerName: "Concepto", width: 200 },
    { field: "monto", headerName: "Monto" },
    { field: "fecha_creacion", headerName: "Fecha creación",width: 150 },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <Button
        variant="outlined"
        color="primary"
        size="small"
      >
        Ver
      </Button>
      ],
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          margin: '-16px -16px 16px -16px',
          padding: '5px'
        }}
      >
        <Typography variant="h6" gutterBottom>
          Listado de cargos aplicados
        </Typography>
      </Box>
      <DataTable rows={cargos} columns={columns} />
    </>
  );
};

export default CargosTable;
