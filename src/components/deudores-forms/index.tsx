import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Ideudores } from "./type";
import SendIcon from '@mui/icons-material/Send';


const DeudoresForms: React.FC<any> = ({ handleSubmit, clientes, formDefault }) => {
  const [formulario, setFormulario] = useState<Ideudores>(formDefault);

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
        <InputLabel id="demo-simple-select-label">Id</InputLabel>
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
              {cliente.id}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Selecciona el Id del Cliente</FormHelperText>

      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Nombre Cliente</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="factura"
          value={formulario?.factura}
          label="Factura"
          name="factura"
          onChange={handleSelectedChange}
        >
          {clientes.map((cliente: any, index: number) => (
            <MenuItem key={index} value={cliente.id}>
              {cliente.nombre}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Selecciona el Nombre del Cliente</FormHelperText>

      </FormControl>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Días Aplazados</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="factura"
          value={formulario?.factura}
          label="Factura"
          name="factura"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>30</MenuItem>
          <MenuItem value={20}>60</MenuItem>
          <MenuItem value={30}>90</MenuItem>
        </Select>
        <FormHelperText>Selecciona los días Aplazados</FormHelperText>

      </FormControl>

      

     
      <FormControl fullWidth sx={selectStyle}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          
          <Button 
              type="submit" 
              variant="contained" 
              color="success" 
              style={{ minWidth: '245px', marginRight: '13px' }}
            
              startIcon={<SendIcon />}
              
            >
             
               Guardar
            </Button>
            
          
            
          </div>



      </FormControl>
    </form>
  );
};
export default DeudoresForms;
