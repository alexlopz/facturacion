import {
  Alert,
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
import { Idebito } from "./type";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';




const DebitoForms: React.FC<any> = ({ handleSubmit, clientes, formDefault }) => {
  const [formulario, setFormulario] = useState<Idebito>(formDefault);

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
        <InputLabel id="demo-simple-select-label">Clientes</InputLabel>
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
        <FormHelperText>Selecciona el Nombre del Cliente</FormHelperText>

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
          <MenuItem value={30}>Thirty</MenuItem>|
      </Select> 
      <FormHelperText>Selección de Factura</FormHelperText>
      </FormControl>

      {/* //Monto */}
        <FormControl  sx={selectStyle}>
        <TextField
          id="outlined-basic"
          label="Monto"
          variant="outlined"
          placeholder="00.00"
          type="number"
          title="Ingresa un Monto"  // poner texto al poner el mouse
          required
          helperText="Ingresa el Monto a debitar"
          onChange={handleChange}
          />
      </FormControl>

{/* descripcion */}
      <FormControl fullWidth sx={selectStyle}>
        <TextField
          id="outlined-basic"
          label="Descripción"
          variant="outlined"
          placeholder="Ingrese Descripción"
          type="text"
          required
          helperText="Ingresa Descripción"
          onChange={handleChange}
        />
      </FormControl>
       

      
      <FormControl fullWidth sx={selectStyle}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          
          <Button 
              type="submit" 
              variant="contained" 
              color="success" 
              style={{ minWidth: '150px', marginRight: '8px' }}
            
              startIcon={<SendIcon />}
            >
               Guardar
            </Button>
  
            
          </div>

      </FormControl>
    </form>
  );
};
export default DebitoForms;
