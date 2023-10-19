import { Button, Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import DataTable from "../../src/components/data-table";
import { IRecordatorio } from "../../src/components/recordatorios/type";
import FiltroReportes from "../../src/components/reportes";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getFacturas } from "../../src/services/facturas";
import Saldo from "../../src/components/saldo-forms";
import DeudoresReportes from "../../src/components/deudores";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "cliente", headerName: "Clientes", width: 200 },
  { field: "fecha_creacion", headerName: "Fecha de Creacion", width: 150 },
  { field: "fecha_ven", headerName: "Fecha Vencida", width: 150 },
  
  { field: "dias", headerName: "Días atrasados", width: 150},
  { field: "cuota", headerName: "cuotas pendientes", width: 150 },
  {
    field: "actions",
    type: "actions",
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
];

const saldos = [
  {
    "id": 1,
    "cliente": "Fabrica de Aceros SA",
    "fecha_creacion": "21/03/2023",
    "fecha_ven": "21/03/2023",
    "tipo_documento": "Factura",
    "dias": "61",
    "cuota": "7",
    "dias_aplazados": 30
  },
  {
    "id": 2,
    "cliente": "Electrodomésticos Eureka",
    "fecha_ven": "03/10/2023",
    "fecha_creacion": "15/04/2023",
    "dias": "83",
    "cuota": "8",
    "dias_aplazados": 90
  },
  {
    "id": 3,
    "cliente": "Supermercado Delicias",
    "fecha_ven": "20/06/2023",
    "fecha_creacion": "02/05/2023",
    "cuota": "5",
    "dias": "12",
    "dias_aplazados": 60
  
  },
  {
    "id": 4,
    "cliente": "Ferretería FerroSolutions",
    "fecha_ven": "07/12/2023",
    "fecha_creacion": "11/06/2023",
    "cuota": "9",
    "dias": "50",
    "dias_aplazados": 60  },
  {
    "id": 5,
    "cliente": "Tienda de Ropa ModaStyle",
    "tipo_documento": "Factura",
    "numero": 567890,
    "monto": 95.90,
    "saldo": 45.10,
    "fecha_ven": "09/08/2023",
    "fecha_creacion": "29/07/2023",
    "cuota": "2",

    "status": "PENDIENTE DE PAGO",
    "dias": "76",
    "dias_aplazados": 60
  },
  {
    "id": 6,
    "cliente": "Cafetería Aromas",
    "tipo_documento": "Recibo",
    "numero": 234567,
    "monto": 18.75,
    "fecha_ven": "25/04/2023",
    "saldo": 0.0,
    "dias": "34",
    "cuota": "4",
    "fecha_creacion": "14/08/2023",
    "status": "PAGADO",
    "dias_aplazados": 90
  },
  {
    "id": 7,
    "cliente": "Distribuidora de Libros LibroMundo",
    "tipo_documento": "Factura",
    "numero": 789012,
    "monto": 175.30,
    "cuota": "1",
    "saldo": 90.20,
    "fecha_ven": "12/01/2023",
    "fecha_creacion": "03/09/2023",
    "status": "PENDIENTE DE PAGO",
    "dias": "99",
    "dias_aplazados": 30
  },
  {
    "id": 8,
    "cliente": "Automotriz CarroVeloz",
    "tipo_documento": "Factura",
    "numero": 456789,
    "cuota": "15",
    "monto": 320.95,
    "fecha_ven": "30/09/2023",
    "saldo": 150.50,
    "fecha_creacion": "22/10/2023",
    "status": "PENDIENTE DE PAGO",
    "dias_aplazados": 90,
    "dias": "67",
  
  },
  {
    "id": 9,
    "cliente": "Joyería Brillantez",
    "tipo_documento": "Recibo",
    "numero": 123456,
    "monto": 60.10,
    "fecha_ven": "18/07/2023",
    "cuota": "8",
    "saldo": 0.0,
    "fecha_creacion": "08/11/2023",
    "status": "PAGADO",
    "dias": "21",
    "dias_aplazados": 60

  },
  {
    "id": 10,
    "cliente": "Farmacia SaludTotal",
    "tipo_documento": "Factura",
    "numero": 345678,
    "monto": 95.25,
    "fecha_ven": "02/05/2023",    "saldo": 35.60,
    "fecha_creacion": "27/12/2023",
    "status": "PENDIENTE DE PAGO",
    "dias": "21",
    "cuota": "4",
    "dias_aplazados": 30
  }
]

const deudoress: React.FC<any> = ({ }) => {
  const verDato = (formulario: IRecordatorio) => {
    console.log("formulario-rec", formulario);
  };

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Lista de Deudores"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <DeudoresReportes/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card variant="outlined">
            <CardContent>
              <DataTable rows={saldos} columns={columns} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pagos = await getFacturas();
  return {
    props: {
      pagos,
    },
  };
};

export default deudoress;
