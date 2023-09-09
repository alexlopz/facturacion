import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { IRecordatorio } from "./type";

const formDefault: IRecordatorio = {
  cliente: "",
  factura: "",
  metodo: "",
  frecuencia: ""
};

const RecordatoriosForm: React.FC<any> = ({ handleSubmit }) => {
  const [formulario, setFormulario] = useState<IRecordatorio>(formDefault);

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

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
          <MenuItem value={1}>Gasolinera Shell</MenuItem>
          <MenuItem value={2}>Gasolina Puma</MenuItem>
          <MenuItem value={3}>Dollar Citi</MenuItem>
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
        <InputLabel id="demo-simple-select-label">Metodo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="metodo"
          value={formulario?.metodo}
          label="Metodo"
          name="metodo"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Frecuencia del Recordatorio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="frecuencia"
          value={formulario?.frecuencia}
          label="Frecuencia del Recordatorio"
          name="frecuencia"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <Button type="submit" variant="contained" color="success">
          Guardar
        </Button>
      </FormControl>
    </form>
  );
};
export default RecordatoriosForm;
