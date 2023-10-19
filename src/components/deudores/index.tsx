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
import React, { useEffect, useState } from "react";

const DeudoresReportes: React.FC<any> = ({}) => {
  const [formulario, setFormulario] = useState<any>({clientes: ''});

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const getRandomNumber = () => Math.floor(Math.random() * 365) + 1;
  const getRandomNumber2 = () => Math.floor(Math.random() * 10) + 1;

  // Generar un array de 365 elementos y llenarlos con números aleatorios
  const randomNumbers = Array.from({ length: 10 }, () => getRandomNumber());
  const randomNumbers2 = Array.from({ length: 10 }, () => getRandomNumber2());

  const [clientes, setClientes] = useState([]);
 

  useEffect(() => {
    // Llamada a la API
    fetch('pages\api\deudores\index.ts/clientes')
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Error al cargar los clientes:', error));
  }, []); 


  const selectStyle = {
    mb: 2,
    mr: 2,
    minWidth: 140,
  };

  return (
    <form onSubmit={() => console.log()}>
    <FormControl sx={{margin: '0px 15px', width: '150px'}}>
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


      <FormControl fullWidth sx={{margin: '0px 11px', width: '170px'}}>
        <TextField
          id="outlined-basic"
          label="Fecha de Creación"
          variant="outlined"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <FormHelperText>Selecciona Emisíon creada</FormHelperText>
      </FormControl>



      <FormControl fullWidth sx={{margin: '0px 10px', width: '160px'}}>
        <TextField
          id="outlined-basic"
          label="Emisíon Vencida"
          variant="outlined"
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <FormHelperText>Selecciona Emisíon Vencida</FormHelperText>
      </FormControl>



     <FormControl fullWidth sx={{ margin: '0px 10px', width: '160px' }}>
      <InputLabel id="demo-simple-select-label">Días Atrasados</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="frecuencia"
        value={formulario?.frecuencia}
        label="Estado"
        name="frecuencia"
        onChange={handleSelectedChange}
      >
        {randomNumbers.map((number, index) => (
          <MenuItem key={index} value={number}>
            {number}
          </MenuItem>
        ))}
        </Select>
        <FormHelperText>Selecciona Día Atrasado</FormHelperText>
      </FormControl>
      
      <FormControl fullWidth sx={{ margin: '0px 10px', width: '180px' }}>
      <InputLabel id="demo-simple-select-label">Cuotas Pendientes</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="frecuencia"
        value={formulario?.frecuencia}
        label="Estado"
        name="frecuencia"
        onChange={handleSelectedChange}
      >
        {randomNumbers2.map((number, index) => (
          <MenuItem key={index} value={number}>
            {number}
          </MenuItem>
        ))}
        </Select>
        <FormHelperText>Selecciona Cuota Pendiente</FormHelperText>
      </FormControl>

      
      <FormControl  sx={{ margin: '0px 20px', width: '180px' }}>

      <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white' }}>
        Buscar
      </Button>
    </FormControl>


      
    </form>
  );
};
export default DeudoresReportes;
