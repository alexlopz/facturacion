import {
    Autocomplete,
    Grid,
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
//import { ICargo } from "./type";
import SendIcon from '@mui/icons-material/Send';


const SolicitudesForm: React.FC<any> = ({
    handleSubmit,
    clientes,
    facturas,
    formDefault
}) => {
    const [formulario, setFormulario] = useState<any>(formDefault);

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
                    Seleccion de Cuenta
                </Typography>
            </Box>
            <FormControl fullWidth sx={{ ...selectStyle, mt: 2 }}>
                <Autocomplete
                    disablePortal
                    id="cliente"
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

            <Grid item xs={12} sm={12} md={12} lg={6}>
                <FormControl fullWidth sx={selectStyle}>
                    <Autocomplete
                        disablePortal
                        id="factura"
                        options={facturas}
                        getOptionLabel={(option: any) => option.factura}
                        renderInput={(params) => (
                            <TextField {...params} name="factura" label="Factura" />
                        )}
                    />
                </FormControl>
            </Grid>


            <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Typography variant="h6" gutterBottom>
                    Selección de Plazo de Crédito
                </Typography>
            </Box>
            <FormControl fullWidth sx={selectStyle}>
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
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: "5px" }}>

                <FormControl  sx={{...selectStyle}}>
                    <Button type="submit" variant="contained" color="success" startIcon={<SendIcon />}>
                        Enviar Solicitud
                    </Button>
                </FormControl>
            </Box>
        </form>
    );
};
export default SolicitudesForm;
