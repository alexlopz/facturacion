import { Card, CardContent, Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import CargosForm from "../../src/components/cargos/form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getCargos } from "../../src/services/cargos";
import { getClientes } from "../../src/services/clientes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ICargo } from "../../src/components/cargos/form/type";
import { useState } from "react";
import CargosTable from "../../src/components/cargos/table";

const formDefault: ICargo = {
  cliente: "",
  factura: "",
  concepto: "",
};

const Cargos: React.FC<any> = ({ cargos, clientes }) => {
  const [formulario, setFormulario] = useState<ICargo>(formDefault);


  const deleteUser = (
    e: React.MouseEvent<HTMLButtonElement>,
    params: ICargo
  ) => {
    console.log("params", params);
    setFormulario(params);
  };

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Cargos"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <CargosForm
                clientes={clientes}
                handleSubmit={(e: any) => console.log("eee", e)}
                formDefault={formulario}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
             <CargosTable cargos={cargos}  />
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
