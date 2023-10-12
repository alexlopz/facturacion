import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { IEstadoRecibo } from "./type";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FormHelperText from '@mui/material/FormHelperText';
import Autocomplete from '@mui/material/Autocomplete';

const formDefault: IEstadoRecibo = {
  codCliente: "",
  estadoRecibo: "",
  fechaInicial: "",
  fechaFinal: "",
};

const EstadoReciboForm: React.FC<any> = ({ handleSubmit }) => {
  const [formulario, setFormulario] = useState<IEstadoRecibo>(formDefault);

  const handleSelectedChange = (event: SelectChangeEvent) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };
  console.log("formulario", formulario);

  const selectStyle = {
    
    mr: 2,
    ml: 1,
    minWidth: 150,
  };
  const top100Films = [
    { label: 199412 },
    { label: 197225 },
    { label: 197444 },
    { label: 200855 },
    { label: 195767 },
    { label: 199385 },
    { label: 199465 },
  ];

  return (
    <form onSubmit={handleSubmit(formulario)}>

      <Grid container justifyContent={"center"} sx={{ mb: 3 }}>
        <Grid item>
          <FormControl sx={selectStyle} >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => <TextField required {...params} label="Codigo Cliente" />}
            />
            <FormHelperText>Ingrese un codigo</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl sx={selectStyle} required>
            <InputLabel id="demo-simple-select-label">Estado Recibo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="estadoRecibo"
              value={formulario?.estadoRecibo}
              label="Estado Recibo"
              name="estadoRecibo"
              onChange={handleSelectedChange}
            >
              <MenuItem value={10}>ACTIVO</MenuItem>
              <MenuItem value={20}>ANULADO</MenuItem>
              <MenuItem value={30}>APLICADO</MenuItem>
            </Select>
            <FormHelperText>Seleccione un estado</FormHelperText>
          </FormControl>
        </Grid>


        <Grid item>
          <FormControl sx={selectStyle}>
            <TextField
              id="outlined-basic"
              label="Fecha Inicio"
              variant="outlined"
              type="date"
              required
              helperText="Clic en el calendario"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl sx={selectStyle}>
            <TextField
              id="outlined-basic"
              label="Fecha Fin"
              variant="outlined"
              type="date"
              required
              helperText="Clic en el calendario"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} sx={{ mb: 2 }}>
        <Grid item sx={{ mb: 2, mr: 1 }}>
          <center><Button variant="contained" color="success" startIcon={<SearchRoundedIcon />}>
            BUSCAR
          </Button>
          </center>
        </Grid>
        <Grid item >
          <center><Button variant="contained" color="error" startIcon={<DeleteRoundedIcon />}>
            LIMPIAR
          </Button>
          </center>
        </Grid>
      </Grid>
    </form>
  );
};
export default EstadoReciboForm;
