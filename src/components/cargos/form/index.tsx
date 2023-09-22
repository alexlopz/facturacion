import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { ICargo } from "./type";

const CargosForm: React.FC<any> = ({ handleSubmit, clientes, formDefault }) => {
  const [formulario, setFormulario] = useState<ICargo>(formDefault);

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
        <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="cliente"
          value={formulario?.cliente}
          label="Cliente"
          name="cliente"
          onChange={handleSelectedChange}
        >
          {clientes.map((cliente: any, index: number) => (
            <MenuItem key={index} value={cliente.id}>
              {cliente.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Factura</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="factura"
          value={formulario?.factura}
          label="Factura"
          name="factura"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Concepto</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="concepto"
          value={formulario?.concepto}
          label="Concepto"
          name="concepto"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <Button type="submit" variant="contained" color="success">
          Primary
        </Button>
      </FormControl>
    </form>
  );
};
export default CargosForm;
