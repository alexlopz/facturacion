import { Autocomplete, Button, Card, CardContent, FormControl, FormHelperText, Grid, Typography } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getCargos } from "../../src/services/cargos";
import { getClientes } from "../../src/services/clientes";
import { getDetalle_facturas } from "../../src/services/detalle_factura";
import TextField from '@mui/material/TextField';
import VisibilityIcon from "@mui/icons-material/Visibility";
//import { ICargo } from "../../src/components/cargos/cargos-form/type";
import { useState } from "react";
import { getSolicitudes } from "../../src/services/solicitudes_credito";
import SolicitudesForm from "../../src/components/solicitudes-form";
//import { ISolicitud } from "../../src/components/solicitudes-form/type";
import Box from '@mui/material/Box';
import { CenterFocusStrong } from "@mui/icons-material";
import RutasForm from "../../src/components/rutas-form";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import { getEmpleados } from "../../src/services/empleados";



const formDefault: any = {
    cliente: "",
    factura: "",
    concepto: "",
};

const Ruta: React.FC<any> = ({ empleados, clientes, facturas, detalle }) => {
    const [formulario, setFormulario] = useState<any>(formDefault);
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 10 },
        { field: "cliente", headerName: "Cliente", width: 200 },
        { field: "factura", headerName: "No. Factura", width: 100 },

        {
            field: "ver",
            type: "actions",
            headerName: "Ver Factura",
            width: 100,
            getActions: (params) => [
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                >
                    Ver
                </Button>
            ],
        },
        { field: "fecha_creacion", headerName: "Fecha", width: 80 },
        { field: "monto", headerName: "Monto", width: 80 },
        {
            field: "agregar",
            type: "actions",
            headerName: "Agregar",
            width: 80,
            getActions: (params) => [
                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    startIcon={<AddIcon />}
                >
                </Button>
            ],
        },
        {
            field: "eliminar",
            type: "actions",
            headerName: "Eliminar",
            width: 80,
            getActions: (params) => [
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon />}
                ></Button>
            ],
        },
    ];

    const selectStyle = {
        mb: 1,
    };

    const styleTable = { height: "100%" };
    return (
        <DashboardLayout title={"Nueva Ruta de Cobro"}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Card variant="outlined" sx={styleTable}>
                        <CardContent>
                            <Box
                                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                            >
                                <Typography variant="h6" gutterBottom>
                                    Seleccione Cliente
                                </Typography>
                            </Box>
                            <FormControl  sx={{ ...selectStyle, mb:-4, mt: 2, ml:45}}>
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
                            <FormControl fullWidth sx={selectStyle}>

                            </FormControl>
                            <Box
                                sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt:2}}
                            >
                                <Typography variant="h6" gutterBottom>
                                    Seleccione Factura
                                </Typography>
                            </Box>
                            <DataTable rows={detalle} columns={columns} />
                            <Box
                                sx={{ display: "flex", justifyContent: "flex-end", width: "100%", mt: "20px" }}

                            >
                                <FormControl sx={selectStyle}>
                                    <Button type="submit" variant="contained" color="success" startIcon={<SendIcon />}>
                                        Asignar Ruta de Cobro
                                    </Button>
                                </FormControl>
                            </Box>



                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined" sx={styleTable}>
                        <CardContent>
                            <RutasForm
                                clientes={clientes}
                                facturas={facturas}
                                empleados={empleados}
                                handleSubmit={(e: any) => console.log("eee", e)}
                                formDefault={formulario}
                            />
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </DashboardLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const clientes = await getClientes();
    const cargos = await getCargos();
    const detalle = await getDetalle_facturas();
    const empleados = await getEmpleados();
    return {
        props: {
            cargos,
            clientes,
            detalle,
            empleados,
        },
    };
};

export default Ruta;