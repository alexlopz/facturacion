import { Button, Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import { useState } from "react";
import DataTableReport from "../../src/components/data-table-report";
import { IRecordatorio } from "../../src/components/recordatorios/type";
import FiltroReportes from "../../src/components/reportes/form";
import DashboardLayout from "../../src/layout/DashboardLayout";

const Reportes: React.FC<any> = ({ clientes }) => {
  const [tipoReporte, setTipoReporte] = useState<string>();

  const submitReport = (value:string) => {
    setTipoReporte(value)
  }

  console.log('tipoReporte', tipoReporte);

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Reportes"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <FiltroReportes submitReport={submitReport}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card variant="outlined">
            <CardContent>
              <DataTableReport tipoReporte={tipoReporte} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pagos = null;
  const clientes = null;
  return {
    props: {
      pagos,
      clientes,
    },
  };
};

export default Reportes;
