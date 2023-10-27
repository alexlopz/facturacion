import {
  Autocomplete,
  Box,
  Button,
  Chip,
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
import SendIcon from "@mui/icons-material/Send";
import { ICliente } from "../../../definitions/ICliente";
import { getFacturasCliente } from "../../../services/facturas";
import DescriptionIcon from "@mui/icons-material/Description";
import DetalleFactura from "../../factura-detalle-modal";

const CargosForm: React.FC<any> = ({ handleSubmit, clientes, formDefault }) => {
  const [formulario, setFormulario] = useState<ICargo>(formDefault);
  const [cliente, setCliente] = useState<ICliente>();
  const [facturas, setFacturas] = useState<any>([]);
  const [factura, setFactura] = useState<any>();
  const [openModal, setOpenModal] = useState(false);

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

  const handleChangeCliente = async (event: any, value: ICliente) => {
    if (value) {
      setCliente(value);
      const response = await getFacturasCliente(value.id);
      setFacturas(response);
      setFactura(undefined);
    }
  };

  const handleChangeFactura = async (event: any, value: ICliente) => {
    setCliente(value);
    // const response = await getFacturasCliente(value.id)
    console.log("factura", value);
    setFactura(value);
  };

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
          margin: "-16px -16px 0 -16px",
          padding: "5px",
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
          getOptionLabel={(option: any) => `${option.nombre} - ${option.nit}`}
          onChange={(event: any, value: ICliente) =>
            handleChangeCliente(event, value)
          }
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
              getOptionLabel={(option: any) => option.id.toString()}
              onChange={(event: any, value: any) =>
                handleChangeFactura(event, value)
              }
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
              <MenuItem value={"cheque"}>Cheque rechazado</MenuItem>
              <MenuItem value={"legales"}>Servicios legales</MenuItem>
              <MenuItem value={"servicios adicionales"}>
                Servicios adicionales
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {factura && (
        <Box sx={{ mb: 2, mt: -2 }}>
          <Chip
            icon={<DescriptionIcon />}
            label={`Ver factura ${factura.id}`}
            variant="outlined"
            onClick={() => setOpenModal(true)}
            color="primary"
          />
        </Box>
      )}
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
      {openModal && (
        <DetalleFactura
          facturaId={factura.id}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </form>
  );
};
export default CargosForm;
