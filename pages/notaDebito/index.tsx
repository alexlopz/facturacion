import { Card, CardContent, Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
//import CargosForm from "../../src/components/cargos/cargos-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getCargos } from "../../src/services/cargos";
import { getClientes } from "../../src/services/clientes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Idebito } from "../../src/components/debito/debito-forms/type";
import { useState } from "react";
import DebitoForms from "../../src/components/debito/debito-forms";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const formDefault: Idebito= {
  cliente: "",
  factura: "",
  num_fecha: "",
  monto: "",
  descripcion:"",
};

const Debito: React.FC<any> = ({ cargos, clientes }) => {
  const [formulario, setFormulario] = useState<Idebito>(formDefault);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "cliente", headerName: "Cliente", width: 200 },
    { field: "factura", headerName: "No. Factura", width: 100 },
    { field: "num_fecha", headerName: "No. Fecha", width: 75 },
    { field: "monto", headerName: "Monto", width: 100 },
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
    params: Idebito
  ) => {
    console.log("params", params);
    setFormulario(params);
  };

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Nota de Débito"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <DebitoForms
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
              <DataTable rows={cargos} columns={columns} />
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

export default Debito;
