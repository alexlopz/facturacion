import {
  Autocomplete,
  Box,
  Button,
  Divider,
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
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/Add";

const CargosForm: React.FC<any> = ({ handleSubmit, clientes, formDefault }) => {
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
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h6" gutterBottom>
          Agregar cargo a factura
        </Typography>
      </Box>
      <FormControl fullWidth sx={{ ...selectStyle, mt: 2 }}>
        {/* <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
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
        </Select> */}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={clientes}
          getOptionLabel={(option: any) => option.nombre}
          value={formulario?.cliente}
          onChange={(event: any, newValue: any) => {
            setFormulario({
              ...formulario,
              cliente: newValue?.nombre,
              nit: newValue?.nit,
            });
          }}
          renderInput={(params) => (
            <TextField {...params} name="cliente" label="Cliente" />
          )}
        />
        {formulario?.cliente && formulario?.nit && (
          <FormHelperText>
            <strong>Cliente:</strong> {formulario?.cliente} -{" "}
            <strong>Nit:</strong> {formulario?.nit}
          </FormHelperText>
        )}
      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
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
              <MenuItem value={10}>678923</MenuItem>
              <MenuItem value={20}>875643</MenuItem>
              <MenuItem value={30}>09986721</MenuItem>
            </Select>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Motivo del cargo</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", height: "45px" }}>
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          startIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </form>
  );
};
export default CargosForm;
