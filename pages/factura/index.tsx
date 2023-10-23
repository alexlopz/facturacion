import { Card, CardContent, Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getClientes } from "../../src/services/clientes";
import { ICargo } from "../../src/components/cargos/form/type";
import { useState } from "react";
import FacturaForm from "../../src/components/factura/form";
import { getProductos } from "../../src/services/productos";
import FacturaTable from "../../src/components/factura/table";

const formDefault: ICargo = {
  cliente: "",
  factura: "",
  concepto: "",
};

const Factura: React.FC<any> = ({ clientes, productos }) => {
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
    <DashboardLayout title={"Factura"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <FacturaForm
                clientes={clientes}
                handleSubmit={(e: any) => console.log("eee", e)}
                formDefault={formulario}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
             <FacturaTable productos={productos}  />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clientes = await getClientes();
  const productos = await getProductos();
  return {
    props: {
      clientes,
      productos,
    },
  };
};

export default Factura;
