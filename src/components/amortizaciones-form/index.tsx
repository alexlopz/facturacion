import {
  Alert,
  Autocomplete,
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
  Snackbar,
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
import MuiAlert, { AlertProps } from '@mui/material/Alert';

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
  const top100Films = [
    { label: 199412 },
    { label: 197225 },
    { label: 197444 },
    { label: 200855 },
    { label: 195767 },
    { label: 199385 },
    { label: 199465 },
  ];
  const top100Films2 = [
    { label: 8994127 },
    { label: 2972254 },
    { label: 3974445 },
    { label: 5008556 },
    { label: 8957674 },
    { label: 4993852 },
    { label: 1994651 },
  ];


  return (
    <form onSubmit={handleSubmit(formulario)}>

      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField required {...params} label="Codigo Cliente" />}
          />
        </Grid>
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
      </Grid>


      <TextField
        helperText=""
        fullWidth sx={{ mb: 1, }}
        label="Nombre Cliente"
        type="text" variant="outlined"
        disabled
        value={"Example"}
        id="outlined-basic"
      />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <TextField
            helperText=""
            fullWidth
            sx={{ mb: 1, }}
            label="Saldo Pendiente"
            value={"Q50,000.00"}
            type="text"
            variant="outlined"
            disabled
            id="outlined-basic"
          />
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

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <TextField
            helperText=""
            fullWidth
            value={"Q1,000.00"}
            sx={{ mb: 1, }}
            label="Intereses"
            variant="outlined"
            type="text"
            disabled
            id="outlined-basic" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            helperText=""
            fullWidth
            sx={{ mb: 1, }}
            label="Total a Pagar"
            value="51,000.00"
            variant="outlined"
            disabled
            id="outlined-basic" />
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
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films2}
                renderInput={(params) => <TextField required {...params} label="#Recibo" />}
              />
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

          <TextField
            helperText="Maximo de 150 caracteres"
            fullWidth sx={{ mb: 2, }}
            label="Descripción"
            variant="outlined"
            id="outlined-disabled"
            required
          />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={6}>
              <TextField
                helperText=""
                fullWidth sx={{ mb: 1, }}
                required
                label="Numero de Transferencia"
                variant="outlined"
                id="outlined-disabled" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText=""
                fullWidth
                sx={{ mb: 1, }}
                label="Monto"
                type="text"
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
    </form>

  );
};

export default AmortizacionesForm;


