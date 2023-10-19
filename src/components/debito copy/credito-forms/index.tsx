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
import { Icredito } from "./type";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

//credito

const CreditoForms: React.FC<any> = ({ handleSubmit, clientes, formDefault }) => {
  const [formulario, setFormulario] = useState<Icredito>(formDefault);

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
          <MenuItem value={10}> 2132132465 </MenuItem>
          <MenuItem value={20}> 9876543210 </MenuItem>
          <MenuItem value={30}> 4567890123 </MenuItem>
          
        </Select>
        <FormHelperText>Selección de Factura</FormHelperText>

      </FormControl>

         {/* monto */}
      <FormControl  sx={selectStyle}>
        <TextField
          id="outlined-basic"
          label="Monto"
          variant="outlined"
          placeholder="00.00"
          type="number"
          helperText="Ingresa el Monto a Acreditar"
          required
          title="Ingresa un Monto" 
          onChange={handleChange}
        />
        
      </FormControl>

      {/* descripcion  */}
      <FormControl fullWidth sx={selectStyle}>
        <TextField
          id="outlined-basic"
          label="Descripción"
          variant="outlined"
          placeholder="Ingrese Descripcion"
          type="text"
          helperText="Ingresa Descripcion"
          required
          onChange={handleChange}
          
        />
      </FormControl>

      

      
      
      <FormControl fullWidth sx={selectStyle}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          
          <Button 
              type="submit" 
              variant="contained" 
              color="success" 
              style={{ minWidth: '295px', marginRight: '8px' }}
            
              startIcon={<SendIcon />}
            >
               Guardar
            </Button>
  
            
          </div>

      </FormControl>


    </form>
  );
};
export default CreditoForms;
