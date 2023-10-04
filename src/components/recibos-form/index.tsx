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
} from "@mui/material";
import React, { useState } from "react";
import { IReciboss } from "./type";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
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

  const selectStyle = {
    mb: 2,
  };

  return (
    <form onSubmit={handleSubmit(formulario)}>            
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Codigo Cliente</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="codCliente"
          value={formulario?.codCliente}
          label="Codigo Cliente"
          name="codCliente"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>105478</MenuItem>
          <MenuItem value={20}>102547</MenuItem>
          <MenuItem value={30}>124898</MenuItem>
        </Select>
      </FormControl>
      <TextField fullWidth sx={selectStyle} label="Nombre Cliente" variant="outlined" disabled id="outlined-disabled"/>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Codigo Cobrador</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="codCobrador"
          value={formulario?.codCobrador}
          label="Codigo Cobrador"
          name="codCobrador"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>2544</MenuItem>
          <MenuItem value={20}>2545</MenuItem>
          <MenuItem value={30}>2872</MenuItem>
        </Select>
      </FormControl>
      <TextField fullWidth sx={selectStyle} label="Nombre Cobrador" variant="outlined" disabled id="outlined-disabled"/>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label" ><CalendarMonthRoundedIcon/> </InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="fecha"
          value={formulario?.fecha}
          label="Fecha"
          name="fecha"
          onChange={handleSelectedChange}> 
        </Select>
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Concepto</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="concepto"
          value={formulario?.concepto}
          label="Concepto del Recibo"
          name="concepto"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Abono</MenuItem>
          <MenuItem value={20}>Cancelación</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
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
          <MenuItem value={20}>Cheque</MenuItem>
          <MenuItem value={20}>Tarjeta</MenuItem>
        </Select>
      </FormControl>
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
      <TableContainer sx={selectStyle}>
<Table>
  <TableHead>
    <TableRow>
      <TableCell align="center">
      <FormControl>
      <Button type="submit" variant="contained" color="success" startIcon={<CheckCircleIcon/>}>
          ACEPTAR
        </Button>
      </FormControl>
      </TableCell>
      <TableCell align="center">
      <FormControl>
      <Button type="submit" variant="contained" color="error" startIcon={<DeleteRoundedIcon/>}>
          LIMPIAR
        </Button>
      </FormControl>
      </TableCell>
    </TableRow>
  </TableHead>
</Table>
      </TableContainer> 
    </form>
  );
};
export default ReciboForm;
