import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ICargo } from "./type";
import SendIcon from '@mui/icons-material/Send';

const CargosForm: React.FC<any> = ({
  handleSubmit,
  clientes,
  facturas,
  formDefault,
}) => {
  const [formulario, setFormulario] = useState<ICargo>(formDefault);

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleSelectedChangeAuto = (event: any) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };
  console.log("formulario", formulario);

  const selectStyle = {
    mb: 4,
  };

  return (
    <form onSubmit={handleSubmit(formulario)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          margin: '-16px -16px 0 -16px',
          padding: '5px'
        }}
      >
        <Typography variant="h6" gutterBottom>
          Agregar cargo a factura
        </Typography>
      </Box>
      <FormControl fullWidth sx={{ ...selectStyle, mt: 2 }}>
        <Autocomplete
          disablePortal
          id="cliente"
          options={clientes}
          getOptionLabel={(option: any) => option.nombre}
          renderInput={(params) => (
            <TextField {...params} name="cliente" label="Cliente" />
          )}
        />
        <FormHelperText>
          Puedes buscar por nombre o apellido del cliente
        </FormHelperText>
      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <FormControl fullWidth sx={selectStyle}>
            <Autocomplete
              disablePortal
              id="factura"
              options={facturas}
              getOptionLabel={(option: any) => option.factura}
              renderInput={(params) => (
                <TextField {...params} name="factura" label="Factura" />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <FormControl fullWidth sx={selectStyle}>
            <InputLabel id="demo-simple-select-label">Concepto</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="concepto"
              value={formulario?.concepto}
              label="Concepto"
              name="concepto"
              onChange={handleSelectedChange}
            >
              <MenuItem value={'cheque'}>Cheque rechazado</MenuItem>
              <MenuItem value={'legales'}>Servicios legales</MenuItem>
              <MenuItem value={'servicios adicionales'}>Servicios adicionales</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", height: "50px" }}>
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          startIcon={<SendIcon />}
        >
          Guardar
        </Button>
      </Box>
    </form>
  );
};
export default CargosForm;
