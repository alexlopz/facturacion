import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import EstadoFacturaForm from "../../src/components/estadoFacturas-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';



const columns: GridColDef[] = [
  { field: "factura", headerName: "Factura", width: 200, align: "center"},
  { field: "cliente", headerName: "Cliente", width: 200, align: "center" },
  { field: "fecha", headerName: "Fecha_Fact", width: 200, align: "center" },
  { field: "monto", headerName: "Monto", width: 200, align: "center" },
  { field: "estado", headerName: "Estado", width: 200, align: "center" },
  {
    field: "actions",
    type: "actions",
    getActions: (params) => [
      <Button
        variant="outlined"
        color="primary"
        size="small"
      >
        <RemoveRedEyeRoundedIcon />
      </Button>
    ], headerName: "Detalle"
  },
];

const rows: any[] = [
  {
    id: 1,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    fecha: "01/07/2023",
    estado: "Vencida",
    monto: "Q500.00",

  },
  {
    id: 2,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    fecha: "05/07/2023",
    estado: "Vencida",
    monto: "Q100.00",
  },
  {
    id: 3,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    fecha: "04/07/2023",
    estado: "Activa",
    monto: "Q200.00",
  },
  {
    id: 4,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    fecha: "03/07/2023",
    estado: "Anulada",
    monto: "Q800.00",
  },
  {
    id: 5,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    fecha: "02/07/2023",
    estado: "Activa",
    monto: "Q450.00",
  },
];

const estadofactu: React.FC<any> = (props) => {
  const styleTable = { bgcolor: "#f5f5f5" };
  return (
    <DashboardLayout title={"Estado Facturas"}>
      <Grid container spacing={4} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
        <Grid item xs={12} md={12} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
          <Card variant="outlined">
            <CardContent>
              <EstadoFacturaForm handleSubmit={(e: any) => console.log("eee", e)} />
              <Box sx={{
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "flex-start",
      alignItems: "left",
      gap: "10px",
    }}>
              <DataTable rows={rows} columns={columns} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default estadofactu;
