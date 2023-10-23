import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  FormControl,
  FormHelperText,
  Grid,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ICargo } from "./type";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import DomainIcon from "@mui/icons-material/Domain";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { ICliente } from "../../../definitions/ICliente";
import TextSection from "../../tools/text-section";
import { IProducto } from "../../../definitions/IProducto";

const FacturaForm: React.FC<any> = ({
  handleSubmit,
  clientes,
  productos,
  formDefault,
}) => {
  const [formulario, setFormulario] = useState<ICargo>(formDefault);
  const [cliente, setCliente] = useState<ICliente>();
  const [producto, setProducto] = useState<IProducto>();
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

  console.log("cliente", cliente);
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
          Cliente
        </Typography>
      </Box>
      <FormControl fullWidth sx={{ mt: 2, minWidth: 300 }}>
            <Autocomplete
              disablePortal
              id="cliente"
              options={clientes}
              getOptionLabel={(option: any) =>
                `${option.nombre} - ${option.nit}`
              }
              onChange={(event: any, value: ICliente) => {
                setCliente(value);
              }}
              renderInput={(params) => (
                <TextField {...params} name="cliente" label="Cliente" />
              )}
            />
            <FormHelperText>
              Puedes buscar por nombre o nit del cliente
            </FormHelperText>
          </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {cliente && (
            <Card variant="outlined">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextSection
                      icon={<PersonIcon />}
                      label={"Cliente"}
                      value={cliente?.nombre}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={4}>
                    <TextSection
                      icon={<DomainIcon />}
                      label={"Nit"}
                      value={cliente?.nit}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={8}>
                    <TextSection
                      icon={<LocationOnIcon />}
                      label={"Direccion"}
                      value={cliente?.direccion}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={4}>
                    <TextSection
                      icon={<PhoneIcon />}
                      label={"Tel"}
                      value={cliente?.telefono}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={8}>
                    <TextSection
                      icon={<EmailIcon />}
                      label={"Email"}
                      value={cliente?.email}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "50px",
              mt: 2,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              startIcon={<SendIcon />}
            >
              Guardar
            </Button>
          </Box> */}
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12} lg={8}>
          <FormControl fullWidth sx={{ mt: 2, minWidth: 300 }}>
            <Autocomplete
              disablePortal
              id="Producto"
              options={productos}
              getOptionLabel={(option: any) =>
                `${option.nombre} - ${option.sku}`
              }
              onChange={(event: any, value: IProducto) => {
                setProducto(value);
              }}
              renderInput={(params) => (
                <TextField {...params} name="producto" label="Productos" />
              )}
            />
            <FormHelperText>Puedes buscar por nombre o sku</FormHelperText>
          </FormControl>
        </Grid> */}
      </Grid>
    </form>
  );
};
export default FacturaForm;
