import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  DialogActions,
  DialogContent,
  Dialog,
  DialogTitle,
  Autocomplete,
} from "@mui/material";
import React, { useState } from "react";
import { IReciboss } from "./type";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const formDefault: IReciboss = {
  codCliente: "",
  nomCliente: "",
  codCobrador: "",
  nombCobrador: "",
  fecha: "",
  razonSocial: "",
  concepto: "",
  tipoPago: "",
  fechaCheque: "",
  numCheque: "",
  banco: "",
};

const ReciboForm: React.FC<any> = ({ handleSubmit }) => {
  const [formulario, setFormulario] = useState<IReciboss>(formDefault);

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

  const selectStyle = {
    mb: 2,
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
          <FormControl fullWidth sx={selectStyle} required>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films2}
              renderInput={(params) => <TextField required {...params} label="Codigo Cobrador" />}
            />
          </FormControl>
        </Grid>
      </Grid>

      <TextField
        fullWidth
        sx={selectStyle}
        label="Nombre Cliente"
        value={"Example"}
        type="text"
        variant="outlined"
        disabled
        id="outlined-disabled"
      />
      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            sx={{ mb: 1, }}
            helperText="Clic en el calendario"
            type="date"
            variant="outlined"
            id="outlined-disabled"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth sx={selectStyle} required>
            <InputLabel id="demo-simple-select-label">Concepto</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="concepto"
              value={formulario?.concepto}
              label="Concepto del Recibo"
              name="concepto"
              required
              onChange={handleSelectedChange}
            >
              <MenuItem value={10}>Abono</MenuItem>
              <MenuItem value={20}>Cancelación</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6}>
          <FormControl fullWidth sx={selectStyle} required>
            <InputLabel id="demo-simple-select-label">Tipo de Pago</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="tipoPago"
              value={formulario?.tipoPago}
              label="Tipo de Pago"
              name="tipoPago"
              onChange={handleSelectedChange}
            >
              <MenuItem value={10}>Efectivo</MenuItem>
              <MenuItem value={20}>Tarjeta</MenuItem>
              <MenuItem value={20}>Transferencia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth sx={selectStyle}>
            <InputLabel id="demo-simple-select-label">Banco</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="banco"
              value={formulario?.banco}
              label="Banco"
              name="banco"
              onChange={handleSelectedChange}
            >
              <MenuItem value={10}>Banco Agromercantil</MenuItem>
              <MenuItem value={20}>Banco Industrial</MenuItem>
              <MenuItem value={20}>Banco G&T</MenuItem>
              <MenuItem value={20}>Banco de Antigua</MenuItem>
            </Select>
          </FormControl>
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



    </form>
  );
};
export default ReciboForm;
