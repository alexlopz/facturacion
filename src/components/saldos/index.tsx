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

const SaldosReportes: React.FC<any> = ({}) => {
  const [formulario, setFormulario] = useState<any>({});

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };
  const getRandomNumber = () => Math.floor(Math.random() * 20) + 1;
  const randomNumbers = Array.from({ length: 10 }, () => getRandomNumber());




  const selectStyle = {
    mb: 2,
    mr: 2,
    minWidth: 140,
  };

  return (
    <form onSubmit={() => console.log()}>
      <FormControl sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Clientes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="cliente"
          value={formulario?.cliente}
          label="Cliente"
          name="cliente"
          onChange={handleSelectedChange}
        ></Select>
                <FormHelperText>Selecciona un Cliente</FormHelperText>

      </FormControl>


      <FormControl fullWidth sx={{margin: '0px 10px', width: '160px'}}>
        <TextField
          id="outlined-basic"
          label="Fecha Emitida"
          variant="outlined"
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <FormHelperText>Selecciona Fecha Emitida</FormHelperText>
      </FormControl>


      <FormControl sx={{margin: '0px 10px', width: '180px'}}>
        <InputLabel id="demo-simple-select-label">Cuotas Pendientes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="metodo"
          value={formulario?.metodo}
          label="Numero"
          name="metodo"
          onChange={handleSelectedChange}
        >
          {randomNumbers.map((number, index) => (
          <MenuItem key={index} value={number}>
            {number}
          </MenuItem>
        ))}
        </Select>
        <FormHelperText>Selecciona las Cuotas Pendietes</FormHelperText>
      </FormControl>


      <FormControl sx={{margin: '0px 10px', width: '180px'}}>
        <InputLabel id="demo-simple-select-label">Cuotas Mensual</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="metodo"
          value={formulario?.metodo}
          label="Numero"
          name="metodo"
          onChange={handleSelectedChange}
        >
          {randomNumbers.map((number, index) => (
          <MenuItem key={index} value={number}>
            {number}
          </MenuItem>
        ))}
        </Select>
        <FormHelperText>Selecciona el mes Atrasado</FormHelperText>
      </FormControl>


      

      <FormControl  sx={{ margin: '0px 20px', width: '180px' }}>

      <Button variant="contained" sx={{ backgroundColor: 'green',  height: '48px' }}>
        Buscar
      </Button>
    </FormControl>

    </form>
  );
};
export default SaldosReportes;
