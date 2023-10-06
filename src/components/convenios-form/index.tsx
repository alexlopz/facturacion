import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import { IConvenio } from "./type";
import Autocomplete from '@mui/material/Autocomplete';


const ConveniosForm: React.FC<any> = ({ handleSubmit, clientes, formDefault }) => {
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
    const selectStyle2={
        mb: 2,
        width: 275,

    };

    const selectStyle3={
        mb: 2,
        width: 160,

    };
    const selectStyleBtn={
        mb: 2,
        width: 160,
        justifyContent:"center",
        


    };

    return (
        <form onSubmit={handleSubmit(formulario)}>
            <h3>Selección de Cuenta</h3>
            <FormControl fullWidth sx={selectStyle}>
                <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="cliente"
                    value={formulario?.cliente}
                    label="Cliente"
                    name="cliente"
                    onChange={handleSelectedChange}
                >
                    {clientes.map((cliente: any, index: number) => (
                        <MenuItem key={index} value={cliente.id}> {cliente.nombre} </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl  sx={selectStyle2}>
                <InputLabel id="demo-simple-select-label">Factura</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="factura"
                    value={formulario?.factura}
                    label="Factura"
                    name="factura"
                    onChange={handleSelectedChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            
            <h3>Selección de Plazo para el Convenio</h3>
            <FormControl fullWidth sx={selectStyle3}>
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


            <FormControl fullWidth sx={selectStyleBtn}>
                <Button type="submit" variant="contained" color="success">
                    Enviar Solicitud
                </Button>
            </FormControl>
        </form>
    );
};
export default ConveniosForm;