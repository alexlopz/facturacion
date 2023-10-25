import {
  FormControl,
  SelectChangeEvent,
  TextField,
  Grid,
  Autocomplete,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { IRecibos } from "./type";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ReciboForm: React.FC<any> = ({
  handleSubmit,
  empleados,
  facturas,
  formDefault }) => {
  const [formulario, setFormulario] = useState<IRecibos>(formDefault);

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleSelectedChangeAuto = (event: any) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  console.log("formulario", formulario);

    const selectStyle = {
    mb: 2,
  };

  
  return (
    <form onSubmit={handleSubmit(formulario)}>

      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
          <FormControl sx={{ width: "300px" }} required>
            <Autocomplete
              disablePortal
              id="nombre"
              options={empleados}
              getOptionLabel={(Option: any) => Option.nombre}
              renderInput={(params) => (<TextField required {...params} name="empleado" label="Cobrador" />)}
            />
            <FormHelperText>
              Ingrese nombre o codigo
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
{/*
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <center><Button onClick={handleClickOpen} type="submit" variant="contained" color="success" startIcon={<CheckCircleIcon />}>
            ACEPTAR
          </Button>
          </center>
        </Grid>
        <Grid item xs={6}>
          <center><Button type="button" variant="contained" color="error" startIcon={<DeleteRoundedIcon />}>
            LIMPIAR
          </Button>
          </center>
        </Grid>
      </Grid>
  
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Crear Recibos</DialogTitle>
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
              <TextField
                helperText=""
                fullWidth
                sx={{ mb: 1, }}
                label="Fecha Limite"
                type="text"
                value="DD/MM/AA"
                variant="outlined"
                disabled id="outlined-basic"
              />
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                label="Saldo Pendiente"
                variant="outlined"
                value={"Q25,000.00"}
                id="outlined-disabled"
                disabled
                type="text"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText=""
                fullWidth sx={{ mb: 1, }}
                type="text"
                label="Intereses"
                value={"Q3,500.00"}
                variant="outlined"
                id="outlined-disabled"
                disabled
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
                label="Numero de Documento"
                type="text"
                variant="outlined"
                id="outlined-disabled"
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
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error" startIcon={<CancelRoundedIcon />} sx={{ maxWidth: 115 }}>CANCELAR</Button>
          <Button variant="contained" color="success" startIcon={<CheckCircleIcon />}>GRABAR</Button>
        </DialogActions>
      </Dialog>
*/}


    </form>
  );
};
export default ReciboForm;
