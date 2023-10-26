import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  FormHelperText,
  Grid,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ICargo } from "./type";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import DomainIcon from "@mui/icons-material/Domain";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { ICliente } from "../../../definitions/ICliente";
import TextSection from "../../tools/text-section";
import { IProducto } from "../../../definitions/IProducto";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';


const FacturaForm: React.FC<any> = ({ handleSubmit, clientes, formulario, loading }) => {
  const [cliente, setCliente] = useState<ICliente>();

  console.log("cliente", cliente);
  const handleChange = (event: any, value: ICliente) => {
    setCliente(value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, cliente)}>
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
          getOptionLabel={(option: any) => `${option.nombre} - ${option.nit}`}
          onChange={(event: any, value: ICliente) => handleChange(event, value)}
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
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 2 }}
      >
        <LoadingButton
          type="submit"
          variant="contained"
          color="success"
          size="large"
          disabled={!(cliente && formulario?.detalle)}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Guardar Factura
        </LoadingButton>
      </Box>
    </form>
  );
};
export default FacturaForm;
