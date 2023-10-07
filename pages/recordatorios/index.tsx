import { Card, CardContent, Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import RecordatoriosForm from "../../src/components/recordatorios";
import RecordatoriosTable from "../../src/components/recordatorios/table";
import { IRecordatorio } from "../../src/components/recordatorios/type";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getClientes } from "../../src/services/clientes";
import { getFacturas } from "../../src/services/facturas";
import { getRecordatorios } from "../../src/services/recordatorios";

const Recordatorios: React.FC<any> = ({ clientes, recordatorios, facturas }) => {
  const verDato = (formulario: IRecordatorio) => {
    console.log("formulario-rec", formulario);
  };
  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"RECORDATORIOS"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <RecordatoriosForm clientes={clientes} handleSubmit={verDato} facturas={facturas} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardContent>
              <RecordatoriosTable recordatorios={recordatorios}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clientes = await getClientes();
  const facturas = await getFacturas();
  const recordatorios = await getRecordatorios();
  return {
    props: {
      clientes,
      facturas,
      recordatorios,
    },
  };
};

export default Recordatorios;
