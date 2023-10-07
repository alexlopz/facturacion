import { Card, CardContent, Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import CargosForm from "../../src/components/cargos/form";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getCargos } from "../../src/services/cargos";
import { getClientes } from "../../src/services/clientes";
import { ICargo } from "../../src/components/cargos/form/type";
import { useState } from "react";
import CargosTable from "../../src/components/cargos/table";
import { getFacturas } from "../../src/services/facturas";

const formDefault: ICargo = {
  cliente: "",
  factura: "",
  concepto: "",
};

const Cargos: React.FC<any> = ({ cargos, clientes, facturas }) => {
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
    <DashboardLayout title={"CARGOS"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <CargosForm
                clientes={clientes}
                facturas={facturas}
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
  const facturas = await getFacturas();
  return {
    props: {
      cargos,
      clientes,
      facturas,
    },
  };
};

export default Cargos;
