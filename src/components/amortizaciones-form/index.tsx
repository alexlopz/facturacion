import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { IAmortizaciones } from "./type";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const formDefault: IAmortizaciones = {
  codCliente: "",
  nomCliente: "",
  codFactura: "",
  saldoPendiente: "",
  fechaLimiPago: "",
  interesesGenerados: "",
  totalPagar: "",
};

const AmortizacionesForm: React.FC<any> = ({ handleSubmit }) => {
  const [formulario, setFormulario] = useState<IAmortizaciones>(formDefault);

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };
  console.log("formulario", formulario);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <form onSubmit={handleSubmit(formulario)}>

      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <TextField required sx={{ mb: 2 }} label="Codigo" variant="outlined" id="outlined-disabled" />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ mb: 2, minWidth: 120 }} required>
            <InputLabel id="demo-simple-select-label">Factura</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="codFactura"
              value={formulario?.codFactura}
              label="Factura"
              name="codFactura"
              onChange={handleSelectedChange}
              margin="none"
              autoWidth
            >
              <MenuItem value={10}>12457893</MenuItem>
              <MenuItem value={20}>33654788</MenuItem>
              <MenuItem value={30}>45487952</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>


      <TextField helperText="Nombre del Cliente" fullWidth sx={{ mb: 1, }} label="Ejemplo" type="text" variant="outlined" disabled value={"Example"} id="outlined-basic" />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <TextField helperText="Saldo Pendiente" fullWidth sx={{ mb: 1, }} label="Q150,000.00" variant="outlined" disabled id="outlined-disabled" />
        </Grid>
        <Grid item xs={6}>
          <TextField helperText="Fecha Limite" fullWidth sx={{ mb: 1, }} label="DD/MM/AA" variant="outlined" disabled id="outlined-disabled" />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <TextField helperText="Intereses" fullWidth sx={{ mb: 1, }} label="Q50.00" variant="outlined" disabled id="outlined-disabled" />
        </Grid>
        <Grid item xs={6}>
          <TextField helperText="Total a Pagar" fullWidth sx={{ mb: 1, }} label="Q150,050.00" variant="outlined" disabled id="outlined-disabled" />
        </Grid>
      </Grid>

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
        <DialogTitle>Amortizaciones</DialogTitle>
        <DialogContent dividers>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={6}>
              <TextField fullWidth required sx={{ mb: 2 }} label="# Recibo" variant="outlined" id="outlined-disabled" />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ mb: 2, minWidth: 120 }} required>
                <InputLabel id="demo-simple-select-label">Metodo Pago</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Factura"
                  name="codFactura"
                  onChange={handleSelectedChange}
                  margin="none"
                  autoWidth        >
                  <MenuItem value={10}>Transferencia</MenuItem>
                  <MenuItem value={20}>Efectivo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <TextField helperText="Descripción" fullWidth sx={{ mb: 1, }} label="Descripción" variant="outlined" id="outlined-disabled" required />

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={6}>
              <TextField helperText="Numero de Transferencia" fullWidth sx={{ mb: 1, }} label="#" variant="outlined" id="outlined-disabled" />
            </Grid>
            <Grid item xs={6}>
              <TextField helperText="Monto" fullWidth sx={{ mb: 1, }} label="Q" variant="outlined" id="outlined-disabled" required />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error" startIcon={<CancelRoundedIcon />} sx={{ maxWidth: 115 }}>CANCELAR</Button>
          <Button variant="contained" color="success" startIcon={<CheckCircleIcon />}>GRABAR</Button>
        </DialogActions>
      </Dialog>
    </form>

  );
};

export default AmortizacionesForm;


