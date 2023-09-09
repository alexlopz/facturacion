import { Card, CardContent, Grid } from "@mui/material";
import RecordatoriosForm from "../../src/components/recordatorios-form";
import { IRecordatorio } from "../../src/components/recordatorios-form/type";
import DashboardLayout from "../../src/layout/DashboardLayout";

const Recordatorios: React.FC<any> = (props) => {

  const verDato = (formulario: IRecordatorio) => {
    console.log('formulario-rec', formulario);
  }
  return (
    <DashboardLayout title={"Recordatorios"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{bgcolor: "#f5f5f5"}}>
            <CardContent>
              <RecordatoriosForm handleSubmit={verDato}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardContent>
              <h1>hola mundo 2</h1>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Recordatorios;
