import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import VisibilityIcon from "@mui/icons-material/Visibility";
//import { ICargo } from "../../src/components/cargos/cargos-form/type";
import { useState } from "react";
import { getAutorizacion } from "../../src/services/autorizacion";
import ConveniosForm from "../../src/components/convenios-form";
import { getCargos } from "../../src/services/cargos";
import { getClientes } from "../../src/services/clientes";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const formDefault: any = {
  cliente: "",
  factura: "",
  concepto: "",
};

const Autorizacion: React.FC<any> = ({ autorizaciones, clientes }) => {
  const [formulario, setFormulario] = useState<any>(formDefault);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "cliente", headerName: "Cliente", width: 200 },
    { field: "factura", headerName: "No. Factura", width: 120 },
    { field: "fecha_creacion", headerName: "Fecha de Emisión", width: 180 },
    { field: "monto", headerName: "Monto", width: 90 },
    {
      field: "ver",
      type: "actions",
      headerName: "Ver Factura",
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

    {
      field: "agregar",
      type: "actions",
      headerName: "Agregar",
      width: 80,
      getActions: (params) => [
        <Button
          variant="contained"
          color="success"
          size="small"
          startIcon={<AddIcon />}
        >
        </Button>

      ],

    },
    {
      field: "eliminar",
      type: "actions",
      headerName: "Eliminar",
      width: 80,
      getActions: (params) => [
        <Button
          variant="contained"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
        ></Button>
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
    <DashboardLayout title={"Nuevo Convenio de Pago"}>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <ConveniosForm
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
            <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Typography variant="h6" gutterBottom>
                    Selección de Facturas Vencidas para el Convenio
                </Typography>
            </Box>
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
  const clientes = await getClientes();
  const cargos = await getCargos();
  return {
    props: {
      autorizaciones,
      clientes,
      cargos,
    },
  };
};
/*Manda los datos al componente*/

export default Autorizacion;
