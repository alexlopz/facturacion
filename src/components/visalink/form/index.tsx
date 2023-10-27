import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { regex } from "../../../utilities/regex";
import { IMonto } from "./type";
import SendIcon from "@mui/icons-material/Send";

const VisalinkForm: React.FC<any> = ({
  handleSubmit,
  formDefault,
  facturas,
}) => {
  const [formulario, setFormulario] = useState<IMonto>(formDefault);
  const [errors, setErrors] = useState<{}>({ monto: undefined });

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChangeNumeric = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = event.target.value;
    const validate = regex.NUMERIC.test(inputNumber);
    if (!validate) {
      setErrors({ monto: "Ingresa un número válido (mayor a cero)" });
    } else {
      setErrors({ monto: undefined });
      handleChange(event);
    }
  };
  console.log("formulario", formulario);

  const selectStyle = {
    mb: 2,
  };

  return (
    <form onSubmit={(event) => handleSubmit(event, formulario)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          margin: "-16px -16px 16px -16px",
          padding: "5px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Crear nuevo link de pago
        </Typography>
      </Box>
      <FormControl fullWidth sx={selectStyle}>
        <TextField
          id="outlined-basic"
          label="Descripcion"
          variant="outlined"
          placeholder="Descripcion del pago"
          type="text"
          required
          name={'descripcion'}
          onChange={handleChange}
        />
      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <FormControl fullWidth sx={selectStyle}>
            <TextField
              id="outlined-basic"
              label="Monto"
              variant="outlined"
              value={formulario?.monto}
              placeholder="00.00"
              type="number"
              required
              onChange={handleChangeNumeric}
              name={'monto'}
              error={errors?.monto != undefined}
              helperText={errors?.monto}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <FormControl fullWidth sx={selectStyle}>
            <Autocomplete
              disablePortal
              id="factura"
              options={facturas}
              getOptionLabel={(option: any) => option.id}
              renderInput={(params) => (
                <TextField {...params} name="factura" label="Factura" />
              )}
            />
          </FormControl>
        </Grid>
      </Grid>

      <FormControl fullWidth sx={selectStyle}>
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          startIcon={<SendIcon />}
        >
          Guardar
        </Button>
      </FormControl>
    </form>
  );
};
export default VisalinkForm;
