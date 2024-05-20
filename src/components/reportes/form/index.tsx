import {
  Autocomplete,
  Box,
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

const FiltroReportes: React.FC<any> = ({submitReport }) => {
  const [formulario, setFormulario] = useState<any>({});


  const handleSelectedChange = (event: SelectChangeEvent) => {
    // setFormulario({ ...formulario, [event.target.name]: event.target.value });
    submitReport(event.target.value)
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
      <FormControl sx={{ ...selectStyle }}>
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="tipo"
          value={''}
          label="Tipo"
          name="tipo"
          onChange={handleSelectedChange}
        >
          <MenuItem value="FACTURAS">FACTURAS</MenuItem>
          <MenuItem value="RECIBOS">RECIBOS</MenuItem>
          <MenuItem value="SOLICITUDES">SOLICITUDES</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl sx={{ ...selectStyle, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="cliente"
          value={formulario?.cliente}
          label="Cliente"
          name="cliente"
          onChange={handleSelectedChange}
        >
          <MenuItem value="Gasolinera Shell">Gasolinera Shell</MenuItem>
          <MenuItem value="Supermercado Mega">Supermercado Mega</MenuItem>
          <MenuItem value="Restaurante La Piazza">
            Restaurante La Piazza
          </MenuItem>
          <MenuItem value="Tienda de electrónicos TecnoWorld">
            Tienda de electrónicos TecnoWorld
          </MenuItem>
          <MenuItem value="Farmacia SaludPlus">Farmacia SaludPlus</MenuItem>
          <MenuItem value="Hotel Paradise">Hotel Paradise</MenuItem>
          <MenuItem value="Taller Mecánico AutoFix">
            Taller Mecánico AutoFix
          </MenuItem>
          <MenuItem value="Librería Book Haven">Librería Book Haven</MenuItem>
          <MenuItem value="Panadería El Horno">Panadería El Horno</MenuItem>
          <MenuItem value="Gimnasio FitLife">Gimnasio FitLife</MenuItem>
        </Select>
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
          <MenuItem value={10}>Factura</MenuItem>
          <MenuItem value={20}>Recibo</MenuItem>
          <MenuItem value={30}>Nota credito</MenuItem>
          <MenuItem value={30}>Solicitud de credito</MenuItem>
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
          <MenuItem value={10}>45781265</MenuItem>
          <MenuItem value={20}>89562312</MenuItem>
          <MenuItem value={30}>87459523</MenuItem>
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
          <MenuItem value={10}>PENDIENTE</MenuItem>
          <MenuItem value={20}>ACTIVO</MenuItem>
          <MenuItem value={30}>AUTORIZADO</MenuItem>
        </Select>
      </FormControl> */}
      {/* <FormControl sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Fecha</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="frecuencia"
          value={formulario?.frecuencia}
          label="RANGO DE FECHAS"
          name="frecuencia"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
      {/* <FormControl sx={selectStyle}>
        <TextField
          id="outlined-basic"
          label="Rango de Fechas"
          variant="outlined"
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
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
      </FormControl> */}
    </form>
  );
};
export default FiltroReportes;
