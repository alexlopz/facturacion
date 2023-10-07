import { Card, CardContent, Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
//import CargosForm from "../../src/components/cargos/cargos-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getCargos } from "../../src/services/cargos";
import { getClientes } from "../../src/services/clientes";
import VisibilityIcon from "@mui/icons-material/Visibility";
 //import { Ideudores } from "../../src/components/saldo-forms/type";
 import { Ideudores } from "../../src/components/deudores-forms/type";
 import DeudoresForms from "../../src/components/deudores-forms";
import { useState } from "react";
import { getSaldos } from "../../src/services/saldos";



const formDefault: Ideudores= {
  cliente: "",
  factura: "",
  num_fecha: "",
  monto: "",
  descripcion:"",
  plazos:"",
  meses:""
};

const Dedudores: React.FC<any> = ({ saldos, clientes }) => {
  const [formulario, setFormulario] = useState<Ideudores>(formDefault);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "cliente", headerName: "Cliente", width: 200 },
    { field: "monto", headerName: "Venta al Credito", width: 100 },
    { field: "num_fecha", headerName: "No. Fecha", width: 100},
    { field: "plazos", headerName: "Plazos", width: 75 },
    { field: "meses", headerName: "Vencimiento", width: 100 },
    { field: "descripcion", headerName: "Descripción" },
    {
      field: "actions",
      type: "actions",
      width: 10,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="Delete"
          onClick={(e) => deleteUser(e, params.row)}
        />,
      ],
    },
  ];

  const deleteUser = (
    e: React.MouseEvent<HTMLButtonElement>,
    params: Ideudores
  ) => {
    console.log("params", params);
    setFormulario(params);
  };

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Lista de Deudores"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <DeudoresForms
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
              <DataTable rows={saldos} columns={columns} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clientes = await getClientes();
  const saldos = await getSaldos();
  return {
    props: {
      saldos,
      clientes,
    },
  };
};

export default Dedudores;
