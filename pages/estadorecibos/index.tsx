import { Button, Card, CardContent, Grid, Tooltip } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import EstadoReciboForm from "../../src/components/estadoRecibos-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';


const columns: GridColDef[] = [
  { field: "recibo", headerName: "Cod_Recibo", width: 120, align: "center" },
  { field: "cliente", headerName: "Cod_Cliente", width: 150, align: "center" },
  { field: "factura", headerName: "Factura", width: 100, align: "center" },
  { field: "fecha", headerName: "Fecha", width: 130, align: "center" },
  { field: "descripcion", headerName: "Descripción", width: 180, align: "center" },
  { field: "monto", headerName: "Monto", width: 150, align: "center" },  
  { field: "estado", headerName: "Estado", width: 100 , align: "center"},
  {
    field: "actions",
    type: "actions",
    getActions: (params) => [
      <Button
        variant="outlined"
        color="primary"
        size="small"
      >
        <RemoveRedEyeRoundedIcon />
      </Button>
    ], headerName: "Detalle"
  },
  {
    field: "actions2",
    type: "actions",
    getActions: (params) => [

      <Button
        variant="outlined"
        color="primary"
        size="small"
      >
        <DeleteRoundedIcon />
      </Button>
    ], headerName: "Eliminar"
  },

];

const rows: any[] = [
  {
    id: 1,
    recibo: 154785,
    cliente: 44457,
    factura: 2132132465,
    fecha: "01/07/2023",
    estado: "Activo",
    descripcion: "Abono a factura",
    monto: "Q12000.00",    
  },
  {
    id: 2,
    recibo: 154788,
    cliente: 44457,
    factura: 2132132465,
    fecha: "01/06/2023",
    estado: "Anulado",
    descripcion: "Abono a factura",
    monto: "Q10000.00", 
  },
  {
    id: 3,
    recibo: 157585,
    cliente: 44457,
    factura: 2132132465,
    fecha: "01/05/2023",
    estado: "Facturado",
    descripcion: "Pago Completo Factura",
    monto: "Q1000.00", 
  },
];

const estadorecibo: React.FC<any> = (props) => {
  const styleTable = { height: "100%"};
  return (
    <DashboardLayout title={"Estado Recibos"}>
      <Grid container spacing={4} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
        <Grid item xs={12} md={12} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
          <Card variant="outlined" >
            <CardContent>
              <EstadoReciboForm handleSubmit={(e: any) => console.log("eee", e)} />
              <DataTable rows={rows} columns={columns}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default estadorecibo;
