import { Card, CardContent, Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import EstadoReciboForm from "../../src/components/estadoRecibos-form";
import DataTable from "../../src/components/data-table";
import DashboardLayout from "../../src/layout/DashboardLayout";
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';


const columns: GridColDef[] = [
  { field: "recibo", headerName: "Cod_Recibo", width: 120, align: "center" },
  { field: "cliente", headerName: "Cod_Cliente", width: 150, align: "center" },
  { field: "factura", headerName: "Factura", width: 100, align: "center" },
  { field: "fecha", headerName: "Fecha", width: 150, align: "center" },  
  { field: "estado", headerName: "Estado", width: 100 , align: "center"},
  {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    getActions: (params) => [
      <GridActionsCellItem
        icon={< EditIcon/> }
        label="Delete"
        onClick={(e) => console.log("eee", e)}
      />,
      <GridActionsCellItem
      icon={<AdfScannerIcon />}
      label="Delete"
      onClick={(e) => console.log("eee", e)}
    />,
    ],
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
  },
  {
    id: 2,
    recibo: 154788,
    cliente: 44457,
    factura: 2132132465,
    fecha: "01/06/2023",
    estado: "Anulado",
  },
  {
    id: 3,
    recibo: 157585,
    cliente: 44457,
    factura: 2132132465,
    fecha: "01/05/2023",
    estado: "Facturado",
  },
];

const estadorecibo: React.FC<any> = (props) => {
  const styleTable = { bgcolor: "#f5f5f5" };
  return (
    <DashboardLayout title={"Estado Recibos"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <EstadoReciboForm handleSubmit={(e: any) => console.log("eee", e)} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <DataTable rows={rows} columns={columns}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default estadorecibo;
