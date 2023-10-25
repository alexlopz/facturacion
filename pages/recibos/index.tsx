import { Autocomplete, Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, TextField, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import ReciboForm from "../../src/components/recibos-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import React, { useState } from "react";
import { getEmpleados } from "../../src/services/empleados";
import { getFacturas } from "../../src/services/facturas";
import { IRecibos } from "../../src/components/recibos-form/type";
import { GetServerSideProps } from "next";


const formDefault: IRecibos= {
  codCobrador: "",
  factura: "",
  concepto: "",
};

const columns: GridColDef[] = [
  { field: "factura", headerName: "Factura", width: 150 },
  { field: "codcliente", headerName: "Cod_Cliente ", width: 100 },
  { field: "cliente", headerName: "Cliente", width: 200 },
  { field: "fecha", headerName: "Fecha_Pago", width: 150 },
  { field: "monto", headerName: "Monto" },
  {
    field: "agregar",
    type: "actions",
    headerName: "Crear_Recibo",
    width: 150,
    getActions: (params) => [
        <Button
            variant="contained"
            color="success"
            size="small" 
            type="submit"
        >
          <NoteAddIcon/>
        </Button>
    ],
},
];


const rows: any[] = [
  {
    id: 1,
    cliente: "Gasolinera Shell",
    factura: 1135532465,
    codcliente: 1235,
    monto: "Q50,000.00",
    fecha: "01/02/2023",
  },
  {
    id: 2,
    cliente: "Gasolinera Puma",
    factura: 8732132465,
    codcliente: 1236,
    monto: "Q200,000.00",
    fecha: "01/02/2023",
  },
  {
    id: 3,
    cliente: "Gasolinera Texaco",
    factura: 2132132465,
    codcliente: 1237,
    monto: "Q10,000.00",
    fecha: "01/02/2023",
  },
];



const recibos: React.FC<any> = ({empleados, facturas }) => {
const [formulario, setFormulario] = useState<IRecibos>(formDefault);

const deleteUser = (
  e: React.MouseEvent<HTMLButtonElement>,
  params: IRecibos
) => {
  console.log("params", params);
  setFormulario(params);
};

const styleTable = { height: "100%" };

  return (
    <DashboardLayout title={"RECIBOS"}>
      <Grid container spacing={4} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
        <Grid item xs={12} md={12} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
          <Card variant="outlined">
            <CardContent>
              <ReciboForm 
              facturas={facturas}
              empleados={empleados} 
              handleSubmit={(e: any) => console.log("eee", e)} 
              formDefault={formulario}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "whitesmoke",                  
                  padding: "5px",
                  borderRadius: "7px 7px 1px 1px",
                  marginTop: "10px",
                }}
              >
                <Typography variant="h5">
                  Facturas Asignadas a Cobrador 
                </Typography>
              </Box>
              <DataTable rows={rows} columns={columns} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>      
    </DashboardLayout> 
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const empleados = await getEmpleados();
  const facturas = await getFacturas();
  return {
    props: {
      empleados,
      facturas,
    },
  };
};

export default recibos;