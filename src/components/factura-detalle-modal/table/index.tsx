import { GridColDef } from "@mui/x-data-grid";
import { Box, Button, Card, Typography } from "@mui/material";
import DataTable from "../../data-table";

const DetalleTable: React.FC<any> = ({ productos, monto }) => {
  const columns: GridColDef[] = [
    { field: "cantidad", headerName: "Cant", editable: true, width: 20 },
    {
      field: "producto.sku",
      headerName: "Sku",
      valueGetter: (params) => params.row.producto.sku,
      width: 100,
    },
    {
      field: "producto.nombre",
      headerName: "Nombre",
      valueGetter: (params) => params.row.producto.nombre,
      width: 200,
    },
    {
      field: "producto.precio",
      headerName: "Precio",
      valueGetter: (params) => params.row.producto.precio,
    },
    { field: "total", headerName: "Total" },
  ];

  console.log("productos", productos);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          padding: "5px",
          boxShadow: "none",
          border: "1px solid rgba(224, 224, 224, 1)",
          marginBottom: '-1px',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Detalle
        </Typography>
      </Card>
      <DataTable rows={productos} columns={columns} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "end",
          mt: 2,
        }}
      >
        <Typography variant="h5">Total:</Typography>
        <Typography variant="h3">Q {monto}</Typography>
      </Box>
    </>
  );
};

export default DetalleTable;
