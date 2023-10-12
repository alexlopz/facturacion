import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IConvenio } from "./type";
import Autocomplete from "@mui/material/Autocomplete";
import SendIcon from "@mui/icons-material/Send";

const ConveniosForm: React.FC<any> = ({
  handleSubmit,
  clientes,
  formDefault,
}) => {
  const [formulario, setFormulario] = useState<any>(formDefault);

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
  const selectStyle2 = {
    mb: 2,
    width: 275,
  };

  const selectStyle3 = {
    mb: 2,
    width: 160,
  };
  const selectStyleBtn = {
    mb: 2,
    width: 160,
    justifyContent: "center",
  };

  return (
    <form onSubmit={handleSubmit(formulario)}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h6" gutterBottom>
          Seleccion de Cuenta
        </Typography>
      </Box>

      <FormControl fullWidth sx={{ ...selectStyle, mt: 2 }}>
        <Autocomplete
          disablePortal
          id="nombre"
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

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h6" gutterBottom>
          Facturas Incluidas en Convenio
        </Typography>
      </Box>
      <FormControl fullWidth sx={selectStyle}>
        <TextField
          id="outlined-multiline-static"
          label="Facturas"
          multiline
          rows={6}
          defaultValue=""
        />
      </FormControl>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h6" gutterBottom>
          Selección de Plazo
        </Typography>
      </Box>
      <FormControl fullWidth sx={selectStyle3}>
        <InputLabel id="demo-simple-select-label">Plazo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="concepto"
          value={formulario?.concepto}
          label="Concepto"
          name="concepto"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>30 Días</MenuItem>
          <MenuItem value={20}>60 Días</MenuItem>
          <MenuItem value={30}>90 Días</MenuItem>
        </Select>
      </FormControl>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          mt: "20px",
        }}
      >
        <FormControl fullWidth sx={selectStyleBtn}>
          <Button
            type="submit"
            variant="contained"
            color="success"
          >
            Enviar Solicitud
          </Button>
        </FormControl>
      </Box>
    </form>
  );
};
export default ConveniosForm;
