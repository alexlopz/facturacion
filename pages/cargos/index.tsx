import { Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import CargosForm from "../../src/components/cargos-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 20 },
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
    monto: 500,
  },
  {
    id: 1,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    concepto: "Cheque rechazado",
    monto: 500,
  },
  {
    id: 1,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    concepto: "Cheque rechazado",
    monto: 500,
  },
  {
    id: 1,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    concepto: "Cheque rechazado",
    monto: 500,
  },
  {
    id: 1,
    cliente: "Gasolinera Shell",
    factura: 2132132465,
    concepto: "Cheque rechazado",
    monto: 500,
  },
];

const Cargos: React.FC<any> = (props) => {
  const styleTable = { bgcolor: "#f5f5f5" };
  return (
    <DashboardLayout title={"Cargos"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <CargosForm handleSubmit={(e: any) => console.log("eee", e)} />
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

export default Cargos;
