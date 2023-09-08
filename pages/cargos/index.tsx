import { Card, CardContent, Grid } from "@mui/material";
import CargosForm from "../../src/components/cargos-form";
import DashboardLayout from "../../src/layout/DashboardLayout";

const Costos: React.FC<any> = (props) => {
  return (
    <DashboardLayout title={"Cargos"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{bgcolor: "#f5f5f5"}}>
            <CardContent>
              <CargosForm handleSubmit={(e:any) => console.log("eee", e)} />
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
      {/* <h1>hola mundo 2</h1> */}
    </DashboardLayout>
  );
};

export default Costos;
