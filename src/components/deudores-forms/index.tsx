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
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';


const FiltroReportes: React.FC<any> = ({}) => {
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
      <FormControl sx={{margin: '10px 10px', width: '150px'}}>
        <InputLabel id="demo-simple-select-label">ID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="cliente"
          value={formulario?.cliente}
          label="Cliente"
          name="cliente"
          title="Seleccion a un ID"
          onChange={handleSelectedChange}
          >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
        <FormHelperText>Selecciona el Id</FormHelperText>
      </FormControl>

      <FormControl sx={{margin: '10px 35px', width: '150px'}}>
        <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
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

      

      

      <FormControl fullWidth sx={{margin: '10px 10px', width: '160px'}}>
        <TextField
          id="outlined-basic"
          label="Fecha Emisíon"
          variant="outlined"
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <FormHelperText>Selecciona Emisíon</FormHelperText>
      </FormControl>

      
      <FormControl sx={{margin: '10px 20px', width: '160px'}}>
        <InputLabel id="demo-simple-select-label">Cuotas Pendientes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="factura"
          value={formulario?.factura}
          label="Documento"
          name="factura"
          title="Selecciona un Cliente"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
          <MenuItem value={10}>6</MenuItem>
          <MenuItem value={20}>4</MenuItem>
          <MenuItem value={30}>5</MenuItem>
        </Select>
        <FormHelperText>Selecciona el cliente</FormHelperText>

      </FormControl>

      

      <FormControl sx={{margin: '10px 10px', width: '150px'}}>
        <InputLabel id="demo-simple-select-label">Cuota Mensual</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="frecuencia"
          value={formulario?.frecuencia}
          label="Fecha"
          name="frecuencia"
          title="Selecciona los días Aplazados"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>30</MenuItem>
          <MenuItem value={20}>60</MenuItem>
          <MenuItem value={30}>90</MenuItem>
        </Select>
        <FormHelperText>Selecciona Aplazos</FormHelperText>

      </FormControl>

      

      <FormControl fullWidth sx={selectStyle}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          
      <Button 
  type="submit" 
  variant="contained" 
  color="success" 
  sx={{ 
    minWidth: '200px',   // Ancho mínimo del botón
    height: '50px',      // Altura del botón
    fontSize: '1.5rem',  // Tamaño del texto dentro del botón
    marginRight: '8px'
  }}
  startIcon={<PersonSearchTwoToneIcon />}
>
  Buscar
</Button>
  
            
          </div>

      </FormControl>

    </form>
  );
};
export default FiltroReportes;