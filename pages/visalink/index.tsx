import { Button, Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import DataTable from "../../src/components/data-table";
import { IRecordatorio } from "../../src/components/recordatorios/type";
import VisalinkForm from "../../src/components/visalink/form";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getFacturas } from "../../src/services/facturas";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "cliente", headerName: "Cliente" },
  { field: "factura", headerName: "Factura" },
  { field: "monto", headerName: "Monto" },
  { field: "status", headerName: "Estado" },
  { field: "fecha_creacion", headerName: "Fecha de Creacion", width: 150 },
  {
    field: "actions",
    type: "actions",
    width: 100,
    getActions: (params) => [
      <Button variant="outlined" color="primary" size="small">
        Ver Link
      </Button>,
    ],
  },
];

const VisaLink: React.FC<any> = ({ pagos }) => {
  const verDato = (formulario: IRecordatorio) => {
    console.log("formulario-rec", formulario);
  };
  const datoPorGuardar = (event: React.ChangeEvent<HTMLFormElement>,formulario: any) => {
    event?.preventDefault()
    console.log('formulario en pagina', formulario)
  }

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Visa link"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <VisalinkForm
                handleSubmit={datoPorGuardar}
                facturas={pagos}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardContent>
              <DataTable rows={pagos} columns={columns} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pagos = await getFacturas();
  return {
    props: {
      pagos,
    },
  };
};

export default VisaLink;
