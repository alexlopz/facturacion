import { Card, CardContent, Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getCargos } from "../../src/services/cargos";
import { getClientes } from "../../src/services/clientes";
import { getDetalle_facturas} from "../../src/services/detalle_factura";
import TextField from '@mui/material/TextField';
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useState } from "react";
import { getSolicitudes } from "../../src/services/solicitudes_credito";
import SolicitudesForm from "../../src/components/solicitudes-form";
//import { ICargo } from "../../src/components/solicitudes-form/type";
import Box from '@mui/material/Box';
import { CenterFocusStrong } from "@mui/icons-material";
import { getFacturas } from "../../src/services/facturas";


const formDefault: any = {
  cliente: "",
  factura: "",
  concepto: "",
};

const Solicitud: React.FC<any> = ({ clientes, facturas,detalle}) => {
  const [formulario, setFormulario] = useState<any>(formDefault);
  const columns: GridColDef[] = [
    { field: "id", headerName: "No.", width: 10 },
    { field: "articulo", headerName: "Artículo", width: 170 },
    { field: "cantidad", headerName: "Cantidad", width: 100 },
    { field: "descripcion", headerName: "Descripción", width: 200 },
    { field: "precio_unidad", headerName: "Precio Unidad" },
    { field: "subtotal", headerName: "Subtotal" },  
  ];

 

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Nueva Solicitud de Crédito"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <SolicitudesForm
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
            <h3>Detalle de Factura</h3>
              <DataTable rows={detalle} columns={columns} />
              <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h3>Total</h3>
      <TextField id="outlined-basic" variant="outlined" value="306.00"/>
      
    </Box>
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
  const detalle = await getDetalle_facturas();
  const facturas = await getFacturas();
  
  return {
    props: {
      cargos,
      clientes,
      facturas,
      detalle,
      
    },
  };
};

export default Solicitud;