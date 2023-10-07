import { Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import AmortizacionesForm from "../../src/components/amortizaciones-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";

const columns: GridColDef[] = [
  { field: "cliente", headerName: "Cliente", width: 200 },
  { field: "factura", headerName: "No. Factura", width: 200 },
  { field: "concepto", headerName: "Concepto", width: 200 },
  { field: "monto", headerName: "Monto" },
];

const rows: any[] = [
  {
    id: 1,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    concepto: "Cheque rechazado",
    monto: "Q500.00",
  },
  {
    id: 2,
    cliente: "Gasolinera Shell",
    factura: 9932132465,
    concepto: "Cheque rechazado",
    monto: "Q500.00",
  },
  {
    id: 3,
    cliente: "Gasolinera Shell",
    factura: 1132132465,
    concepto: "Pago Completo",
    monto: "Q500.00",
  },
  {
    id: 4,
    cliente: "Gasolinera Shell",
    factura: 4532132465,
    concepto: "Abono",
    monto: "Q500.00",
  },
];

const Amortizaciones: React.FC<any> = (props) => {
  const styleTable = { bgcolor: "#f5f5f5" };
  return (
    <DashboardLayout title={"Amortizaciones"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <AmortizacionesForm handleSubmit={(e: any) => console.log("eee", e)} />
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

export default Amortizaciones;
