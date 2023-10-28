import { Autocomplete, Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent,TextField, Typography } from "@mui/material";
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
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { crearRecibo } from "../../src/services/recibos";
import { useRouter } from "next/router";



const formDefault: IRecibos= {
  codCobrador: "",
  factura: "",
  concepto: "",
};




const rows: any[] = [
  {
    id: 1,
    cliente: "Gasolinera Shell",
    factura: 1020,
    codcliente: 1235,
    monto: "Q50,000.00",
    fecha: "01/02/2023",
  },
  {
    id: 2,
    cliente: "Gasolinera Puma",
    factura: 1021,
    codcliente: 1236,
    monto: "Q200,000.00",
    fecha: "01/02/2023",
  },
  {
    id: 3,
    cliente: "Gasolinera Texaco",
    factura: 1022,
    codcliente: 1237,
    monto: "Q10,000.00",
    fecha: "01/02/2023",
  },
];

const top100Films2 = [
  { label: 1020 },
  { label: 1021 },
  { label: 1022 },
  { label: 1023 },
  { label: 1024 },
  { label: 1025 },
  { label: 1026 },
];



const recibos: React.FC<any> = ({empleados, facturas }) => {
const [formulario, setFormulario] = useState<any>();
const [open, setOpen] = useState(false);


const handleSelectedChange = (event: SelectChangeEvent) => {
  setFormulario({ ...formulario, [event.target.name]: event.target.value });
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setFormulario({ ...formulario, [event.target.name]: event.target.value });
  
};

const router = useRouter();
const guardarRecibos = async (event: React.ChangeEvent<HTMLInputElement>) => {
  await crearRecibo(formulario);
  router.reload();
  
};


const handleClickOpen = (params:any) => {
  setFormulario({...formulario,id_factura: params.row.factura});
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
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
            onClick={() => handleClickOpen(params)}
        >
          <NoteAddIcon/>
        </Button>
        
    ],
},
];

const deleteUser = (
  e: React.MouseEvent<HTMLButtonElement>,
  params: IRecibos
) => {
  console.log("params", params);
  setFormulario(params);
};

console.log("formulario", formulario);
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

      <Dialog open={open} onClose={handleClose} fullWidth >
        <DialogTitle>Crear Recibos factura{formulario?.id_factura}</DialogTitle>
        <DialogContent dividers>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ mb: 2, minWidth: 120 }} required>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films2}
                  renderInput={(params) => <TextField required {...params} label="Codigo Factura" />}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ mb: 2, minWidth: 120 }} required>
                <InputLabel id="demo-simple-select-label">Metodo Pago</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="metodopago"
                  name="metodo_pago"
                  onChange={handleSelectedChange}
                  margin="none"
                  autoWidth        >
                  <MenuItem value={10}>Transferencia</MenuItem>
                  <MenuItem value={20}>Efectivo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                label="Descripción"
                variant="outlined"
                id="outlined-disabled"
                type="text"
                name="descripcion"
                helperText="Maximo 255 caracteres"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={6}>
              <TextField
                helperText=""
                fullWidth
                sx={{ mb: 1, }}
                label="Numero de Transacción"
                type="text"
                variant="outlined"
                id="outlined-disabled"
                name="num_documento"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText=""
                fullWidth sx={{ mb: 2, }}
                label="Monto a Cobrar"
                variant="outlined"
                id="outlined-disabled"
                required
                onChange={handleChange}
                name="monto"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error" startIcon={<CancelRoundedIcon />} sx={{ maxWidth: 115 }}>CANCELAR</Button>
          <Button onClick={(e:any)=> guardarRecibos(e) } variant="contained" color="success" startIcon={<CheckCircleIcon />}>GRABAR</Button>
        </DialogActions>
      </Dialog>

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