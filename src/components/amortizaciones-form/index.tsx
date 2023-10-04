import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { IAmortizaciones } from "./type";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';



const formDefault: IAmortizaciones = {
  codCliente: "",
  nomCliente: "",
  codFactura: "",
  saldoPendiente: "",
  fechaLimiPago: "",
  interesesGenerados: "",
  totalPagar: "",
};

const AmortizacionesForm: React.FC<any> = ({ handleSubmit }) => {
  const [formulario, setFormulario] = useState<IAmortizaciones>(formDefault);

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
    <form onSubmit={handleSubmit(formulario)}>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">CodCliente</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="codCliente"
          value={formulario?.codCliente}
          label="codigo Cliente"
          name="codCliente"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>101230</MenuItem>
          <MenuItem value={20}>101231</MenuItem>
          <MenuItem value={30}>101232</MenuItem>
        </Select>
      </FormControl>
      <TextField fullWidth sx={selectStyle} label="Nombre Cliente" variant="outlined" disabled id="outlined-disabled"/>
      <FormControl fullWidth sx={selectStyle}>
        <InputLabel id="demo-simple-select-label">Factura</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="codFactura"
          value={formulario?.codFactura}
          label="Factura"
          name="codFactura"
          onChange={handleSelectedChange}
        >
          <MenuItem value={10}>12457893</MenuItem>
          <MenuItem value={20}>33654788</MenuItem>
          <MenuItem value={30}>45487952</MenuItem>
        </Select>
      </FormControl>
      <TextField fullWidth sx={selectStyle} label="Saldo Pendiente" variant="outlined" disabled id="outlined-disabled"/>
      <TextField fullWidth sx={selectStyle} label="Fecha Limite de Pago" variant="outlined" disabled id="outlined-disabled"/>
      <TextField fullWidth sx={selectStyle} label="Intereses Generados" variant="outlined" disabled id="outlined-disabled"/>
      <TextField fullWidth sx={selectStyle} label="Total a Pagar" variant="outlined" disabled id="outlined-disabled"/>
      <TableContainer sx={selectStyle}>
<Table>
  <TableHead>
    <TableRow>
      <TableCell align="center">
      <FormControl>
        <Button type="submit" variant="contained" color="success" startIcon={<CheckCircleIcon/>}>
          ACEPTAR
        </Button>
      </FormControl>
      </TableCell>
      <TableCell align="center">
      <FormControl>
        <Button type="submit" variant="contained" color="error" startIcon={<DeleteRoundedIcon/>}>
          LIMPIAR
        </Button>
      </FormControl>
      </TableCell>
    </TableRow>
  </TableHead>
</Table>
      </TableContainer> 
    </form>
  );
};

export default AmortizacionesForm;


