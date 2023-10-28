import {
  FormControl,
  SelectChangeEvent,
  TextField,
  Grid,
  Autocomplete,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { IRecibos } from "./type";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IEmpleados } from "../../definitions/IEmpleados";
import { getFacturasCliente } from "../../services/facturas";

const ReciboForm: React.FC<any> = ({
  handleSubmit,
  empleados,
  formDefault }) => {
  const [formulario, setFormulario] = useState<IRecibos>(formDefault);
  const [empleado, setCliente] = useState<IEmpleados>();
  const [facturas, setFacturas] = useState<any>([]);
  const [factura, setFactura] = useState<any>();

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

  const handleChangeEmpleado = async (event: any, value: IEmpleados) => {
    if (value) {
      setCliente(value);
      const response = await getFacturasCliente(value.codigo);
      setFacturas(response);
      setFactura(undefined);
    }
  };

  const handleChangeFactura = async (event: any, value: IEmpleados) => {
    setCliente(value);
    // const response = await getFacturasCliente(value.id)
    console.log("factura", value);
    setFactura(value);
  };
  

    const selectStyle = {
    mb: 2,
  };

  
  return (
    <form onSubmit={handleSubmit(formulario)}>

      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={6} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
          <FormControl sx={{ width: "300px" }} required>
            <Autocomplete
              disablePortal
              id="empleado"
              options={empleados}
              getOptionLabel={(option: any) => `${option.nombre} ${option.apellido} - ${option.codigo}`}
              onChange={(event: any, value: IEmpleados) =>
                handleChangeEmpleado(event, value)
              }
              renderInput={(params) => (<TextField required {...params} name="empleado" label="Cobrador" />)}
            />
            <FormHelperText>
              Ingrese nombre o codigo
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};
export default ReciboForm;
