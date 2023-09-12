import { Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import DataTable from "../../src/components/data-table";
import RecordatoriosForm from "../../src/components/recordatorios-form";
import { IRecordatorio } from "../../src/components/recordatorios-form/type";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getClientes } from "../../src/services/clientes";
import { getRecordatorios } from "../../src/services/recordatorios";

const columns: GridColDef[] = [
  {field: "id", headerName:"ID" },
  {field: "cliente", headerName:"Cliente" },
  {field: "factura", headerName:"Factura" },
  {field: "metodo", headerName:"Metodo" },
  {field: "frecuencia", headerName:"Frecuencia" },
  {field: "status", headerName:"Estado" },
  {field: "fecha_creacion", headerName:"Fecha de Creacion" },
]

const VisaLink: React.FC<any> = ({ clientes, recordatorios }) => {

  const verDato = (formulario: IRecordatorio) => {
    console.log('formulario-rec', formulario);
  }
  return (
    <DashboardLayout title={"Recordatorios"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{bgcolor: "#f5f5f5"}}>
            <CardContent>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardContent>
            <DataTable rows={[]} columns={[]}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clientes = await getClientes();
  const recordatorios = await getRecordatorios();
  return {
    props: {
      clientes,
      recordatorios
    },
  };
};

export default VisaLink;
