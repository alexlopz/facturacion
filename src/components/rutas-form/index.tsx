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
import { IRuta } from "./type";
import Autocomplete from '@mui/material/Autocomplete';


const RutasForm: React.FC<any> = ({ handleSubmit, empleados,clientes, formDefault }) => {
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

    return (
        <form onSubmit={handleSubmit(formulario)}>
            <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Typography variant="h6" gutterBottom>
                    Selección de Cobrador
                </Typography>
            </Box>
            <FormControl fullWidth sx={{ ...selectStyle, mt: 2 }}>
                <Autocomplete
                    disablePortal
                    id="nombre"
                    options={empleados}
                    getOptionLabel={(option: any) => option.nombre}
                    renderInput={(params) => (
                        <TextField {...params} name="cliente" label="Cobrador" />
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
                    Facturas Cargadas a Ruta
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


            
        </form>
    );
};
export default RutasForm;
