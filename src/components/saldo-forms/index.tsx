import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Saldo: React.FC<any> = ({}) => {
  const [formulario, setFormulario] = useState<any>({});

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const selectStyle = {
    mb: 2,
    mr: 2,
    minWidth: 140,
  };

  return (
    <form onSubmit={() => console.log()}>
      <FormControl sx={{margin: '10px 35px', width: '150px'}}>
        <InputLabel id="demo-simple-select-label">Clientse</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="factura"
          value={formulario?.factura}
          label="Documento"
          name="factura"
          title="Selecciona un Cliente"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Gasolinera Shell</MenuItem>
          <MenuItem value={20}>Tienda de comestibles</MenuItem>
          <MenuItem value={30}>Restaurante La Piazza</MenuItem>
          <MenuItem value={30}>Taller mecánico AutoFix</MenuItem>
          <MenuItem value={30}>Farmacia Saludable</MenuItem>
        </Select>
        <FormHelperText>Selecciona el cliente</FormHelperText>

      </FormControl>


      
      <FormControl sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Documento</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="factura"
          value={formulario?.factura}
          label="Documento"
          name="factura"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Numero</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="metodo"
          value={formulario?.metodo}
          label="Numero"
          name="metodo"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="frecuencia"
          value={formulario?.frecuencia}
          label="Estado"
          name="frecuencia"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Fecha</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="frecuencia"
          value={formulario?.frecuencia}
          label="Fecha"
          name="frecuencia"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Dias credito</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="frecuencia"
          value={formulario?.frecuencia}
          label="Dias Credito"
          name="frecuencia"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ width: "auto", mb: 2 }}>
        <TextField
          id="outlined-basic"
          label="Buscar"
          name={"nombre"}
          variant="outlined"
          placeholder="Identificador del link"
          type="text"
          required
          onChange={handleChange}
        />
      </FormControl>
    </form>
  );
};
export default Saldo;
