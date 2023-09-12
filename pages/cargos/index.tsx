import { Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import CargosForm from "../../src/components/cargos/cargos-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getCargos } from "../../src/services/cargos";
import { getClientes } from "../../src/services/clientes";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "cliente", headerName: "Cliente", width: 200 },
  { field: "factura", headerName: "No. Factura", width: 200 },
  { field: "concepto", headerName: "Concepto", width: 200 },
  { field: "monto", headerName: "Monto" },
];

const Cargos: React.FC<any> = ({ cargos, clientes }) => {
  
  const styleTable = { bgcolor: "#f5f5f5" };
  return (
    <DashboardLayout title={"Cargos"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <CargosForm clientes={clientes} handleSubmit={(e: any) => console.log("eee", e)} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <DataTable rows={cargos} columns={columns} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clientes = await getClientes();
  const cargos = await getCargos();
  return {
    props: {
      cargos,
      clientes,
    },
  };
};

export default Cargos;
