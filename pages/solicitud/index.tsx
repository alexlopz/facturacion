import { Card, CardContent, Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import CargosForm from "../../src/components/cargos/cargos-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getCargos } from "../../src/services/cargos";
import { getClientes } from "../../src/services/clientes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ICargo } from "../../src/components/cargos/cargos-form/type";
import { useState } from "react";


const formDefault: ICargo = {
  cliente: "",
  factura: "",
  concepto: "",
};

const Solicitud: React.FC<any> = ({ cargos, clientes }) => {
  const [formulario, setFormulario] = useState<ICargo>(formDefault);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "cliente", headerName: "Cliente", width: 200 },
    { field: "factura", headerName: "No. Factura", width: 100 },
    { field: "concepto", headerName: "Concepto", width: 200 },
    { field: "monto", headerName: "Monto" },
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
    params: ICargo
  ) => {
    console.log("params", params);
    setFormulario(params);
  };

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Nueva Solicitud"}>
      
     

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

export default Solicitud;