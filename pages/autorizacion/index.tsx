import { Button, Card, CardContent, Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import VisibilityIcon from "@mui/icons-material/Visibility";
//import { ICargo } from "../../src/components/cargos/cargos-form/type";
import { useState } from "react";
import { getAutorizacion } from "../../src/services/autorizacion";
import { getSolicitudes } from "../../src/services/solicitudes_credito";
import { ISolicitud } from "../../src/components/solicitudes-form/type";


const formDefault: any = {
  cliente: "",
  factura: "",
  concepto: "",
  
};

const Autorizacion: React.FC<any> = ({ autorizaciones, solicitudes }) => {
  const [formulario, setFormulario] = useState<any>(formDefault);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "cliente", headerName: "Cliente", width: 200 },
    { field: "factura", headerName: "No. Factura", width: 120 },
    { field: "fecha_creacion", headerName: "Fecha de Solicitud", width: 180 },
    { field: "monto", headerName: "Monto", width: 90 },
    { field: "estado", headerName: "Estado", width: 90 },
    {
      field: "actions",
      type: "actions",
      headerName: "Ver solicitud",
      width: 100,
      getActions: (params) => [
        <Button
          variant="outlined"
          color="primary"
          size="small"
        >
          Ver
        </Button>
      ],
    },
  ];

  const deleteUser = (
    e: React.MouseEvent<HTMLButtonElement>,
    params: any
  ) => {
    console.log("params", params);
    setFormulario(params);
  };

  const styleTable = { height: "100%", margin: "0 auto" };
  return (
    <DashboardLayout title={"Autorización"}>

      <Grid container spacing={40} sx={{ justifyContent: 'center' }}>

        <Grid item xs={12} md={9}>
          <Card variant="outlined" sx={styleTable}>

            <CardContent>
              <h3>Solicitudes de Crédito</h3>
              <DataTable rows={autorizaciones} columns={columns} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const autorizaciones = await getAutorizacion();
  const solicitudes = await getSolicitudes();
  return {
    props: {
      autorizaciones,
      solicitudes,
    },
  };
};
/*Manda los datos al componente*/

export default Autorizacion;