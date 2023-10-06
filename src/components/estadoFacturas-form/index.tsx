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
import { IEstadoFactura } from "./type";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const formDefault: IEstadoFactura = {
  codCliente: "",
  estadoFactura: "",
  fechaInicial: "",
  fechaFinal: "",
};

const EstadoFacturaForm: React.FC<any> = ({ handleSubmit }) => {
  const [formulario, setFormulario] = useState<IEstadoFactura>(formDefault);

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
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Estado Factura</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="estadoFactura"
          value={formulario?.estadoFactura}
          label="Estado Factura"
          name="estadoFactura"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>VENCIDA</MenuItem>
          <MenuItem value={20}>ACTIVA</MenuItem>
          <MenuItem value={30}>CANCELADA</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
      <TextField
          id="outlined-basic"
          label="Fecha Inicio"
          variant="outlined"
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
      <TextField
          id="outlined-basic"
          label="Fecha Final"
          variant="outlined"
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
      </FormControl>
      <TableContainer sx={selectStyle}>
<Table>
  <TableHead>
    <TableRow>
      <TableCell align="center">
      <FormControl>
        <Button type="submit" variant="contained" color="success" startIcon={<SearchRoundedIcon/>} >
          BUSCAR
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
export default EstadoFacturaForm;
