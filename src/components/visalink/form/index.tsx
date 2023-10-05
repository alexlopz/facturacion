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

const VisalinkForm: React.FC<any> = ({ handleSubmit, formDefault }) => {
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
        <TextField
          id="outlined-basic"
          label="Nombre"
          name={"nombre"}
          variant="outlined"
          placeholder="Identificador del link"
          type="text"
          required
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <TextField
          id="outlined-basic"
          label="Descripcion"
          variant="outlined"
          placeholder="Descripcion del pago"
          type="text"
          required
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <TextField
          id="outlined-basic"
          label="Monto"
          variant="outlined"
          placeholder="00.00"
          type="number"
          required
          onChange={handleChange}
          inputProps={{ inputMode: 'numeric', pattern: '^[0-9]{1,4}(?:\.[0-9]{1,2})?$'}}
        />
      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Factura</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="factura"
          value={formulario?.factura}
          label="Factura"
          name="factura"
          placeholder="Factura"
          onChange={handleSelectedChange}
          required
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
export default VisalinkForm;
