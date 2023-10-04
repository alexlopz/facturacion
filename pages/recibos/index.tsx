import { Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import ReciboForm from "../../src/components/recibos-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";

const columns: GridColDef[] = [
  { field: "factura", headerName: "Factura", width: 150 },
  { field: "codcliente", headerName: "Cod_Cliente ", width: 100 },
  { field: "cliente", headerName: "Cliente", width: 150 },  
  { field: "fecha", headerName: "Fecha", width: 150 },
  { field: "monto", headerName: "Monto" },
];

const rows: any[] = [
  {
    id: 1,
    cliente: "Gasolinera Shell",
    factura: 1135532465,
    codcliente: 1235,
    monto: "Q500.00",
    fecha: "01/02/2023",
  },
  {
    id: 2,
    cliente: "Gasolinera Puma",
    factura: 8732132465,
    codcliente: 1236,
    monto: "Q200.00",
    fecha: "01/02/2023",
  },
  {
    id: 3,
    cliente: "Gasolinera Texaco",
    factura: 2132132465,
    codcliente: 1237,
    monto: "Q600.00",
    fecha: "01/02/2023",
  },
];

const recibos: React.FC<any> = (props) => {
  const styleTable = { bgcolor: "#f5f5f5" };
  return (
    <DashboardLayout title={"Recibos"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <ReciboForm handleSubmit={(e: any) => console.log("eee", e)} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <DataTable rows={rows} columns={columns} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default recibos;