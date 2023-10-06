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
import { IEstadoRecibo } from "./type";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const formDefault: IEstadoRecibo = {
  codCliente: "",
  estadoRecibo: "",
  fechaInicial: "",
  fechaFinal: "",
};

const EstadoReciboForm: React.FC<any> = ({ handleSubmit }) => {
  const [formulario, setFormulario] = useState<IEstadoRecibo>(formDefault);

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
        <InputLabel id="demo-simple-select-label">Estado Recibo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="estadoRecibo"
          value={formulario?.estadoRecibo}
          label="Estado Recibo"
          name="estadoRecibo"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>ACTIVO</MenuItem>
          <MenuItem value={20}>ANULADO</MenuItem>
          <MenuItem value={30}>APLICADO</MenuItem>
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
export default EstadoReciboForm;
