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
import { IRecordatorio } from "./type";

const formDefault: IRecordatorio = {
  cliente: "",
  factura: "",
  metodo: "",
  frecuencia: "",
};

const RecordatoriosForm: React.FC<any> = ({
  handleSubmit,
  clientes,
  facturas,
}) => {
  const [formulario, setFormulario] = useState<IRecordatorio>(formDefault);

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const selectStyle = {
    mb: 2,
  };

  return (
    <form onSubmit={handleSubmit(formulario)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          margin: "-16px -16px 0 -16px",
          padding: "5px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Agregar recordatorio de pago
        </Typography>
      </Box>
      <FormControl fullWidth sx={{ ...selectStyle, mt: 2 }}>
        <Autocomplete
          disablePortal
          id="cliente"
          options={clientes}
          getOptionLabel={(option: any) => option.nombre}
          renderInput={(params) => (
            <TextField {...params} name="cliente" label="Cliente" required />
          )}
        />
        <FormHelperText>
          Puedes buscar por nombre o apellido del cliente
        </FormHelperText>
      </FormControl>
      <Grid container spacing={2} direction="row" justifyContent="flex-start">
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <FormControl fullWidth sx={selectStyle}>
            <Autocomplete
              disablePortal
              id="factura"
              options={facturas}
              getOptionLabel={(option: any) => option.factura}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="factura"
                  label="Factura"
                  required
                />
              )}
            />
            <FormHelperText>Factura que debe pagar</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <FormControl fullWidth sx={selectStyle}>
            <InputLabel id="demo-simple-select-label">Metodo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="metodo"
              value={formulario?.metodo}
              label="Metodo"
              name="metodo"
              onChange={handleSelectedChange}
            >
              <MenuItem value={10}>Correo Electronico</MenuItem>
              <MenuItem value={20}>SMS</MenuItem>
              <MenuItem value={30}>Llamada</MenuItem>
            </Select>
            <FormHelperText>Como se enviara el recordatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} sx={{ paddingTop: "0" }}>
          <FormControl fullWidth sx={selectStyle}>
            <InputLabel id="demo-simple-select-label">
              Frecuencia del Recordatorio
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="frecuencia"
              value={formulario?.frecuencia}
              label="Frecuencia del Recordatorio"
              name="frecuencia"
              onChange={handleSelectedChange}
            >
              <MenuItem value={10}>Diario</MenuItem>
              <MenuItem value={20}>Semanal</MenuItem>
              <MenuItem value={30}>Quincenal</MenuItem>
              <MenuItem value={30}>mensual</MenuItem>
              <MenuItem value={30}>Unica vez</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <FormControl fullWidth sx={selectStyle}>
        <Button type="submit" variant="contained" color="success">
          Guardar
        </Button>
      </FormControl>
    </form>
  );
};
export default RecordatoriosForm;
