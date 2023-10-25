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
import { Isaldos } from "./type";
import SendIcon from "@mui/icons-material/Send";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";

const SaldosForms: React.FC<any> = ({
  handleSubmit,
  clientes,
  formDefault,
}) => {
  const [formulario, setFormulario] = useState<Isaldos>(formDefault);

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
    <>
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

        <FormHelperText>Selecciona el Id</FormHelperText>
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
        <InputLabel id="demo-simple-select-label">Dias Aplazados</InputLabel>
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
        <FormHelperText>Selecciona los dias Aplazados</FormHelperText>
      </FormControl>

      <FormControl fullWidth sx={selectStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Button
            variant="contained"
            color="success"
            style={{ minWidth: "245px", marginRight: "13px" }}
            onClick={(e) => handleSubmit(e, formulario)}
            startIcon={<SendIcon />}
          >
            Guardar
          </Button>
        </div>
      </FormControl>
    </>
  );
};
export default SaldosForms;
