import { Button, Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import DataTable from "../../src/components/data-table";
import { IRecordatorio } from "../../src/components/recordatorios/type";
import FiltroReportes from "../../src/components/reportes";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getFacturas } from "../../src/services/facturas";
import Saldo from "../../src/components/saldo-forms";
import SaldosReportes from "../../src/components/saldos";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "cliente", headerName: "Clientes", width: 200 },
  { field: "fecha_creacion", headerName: "Fecha de Emitida", width: 150 },
  { field: "cuota_pen", headerName: "Cuotas pendientes", width: 150},
  { field: "cuo_men", headerName: "Cuota Mensual", width: 100 },
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
    "cuota_pen": "1",
     "cuo_men" : "500"
  },
  {
    "id": 2,
    "cliente": "Electrodomésticos Eureka",
    "cuota_pen": "5",
    "fecha_creacion": "21/03/2023",
    "cuo_men" : "222"
  },
  {
    "id": 3,
    "cliente": "Supermercado Delicias",
    "cuota_pen": "7",
"fecha_creacion": "15/07/2023",
"cuo_men": "150"
  
  },
  {
    "id": 4,
    "cliente": "Ferretería FerroSolutions",
    "cuota_pen": "2",
"fecha_creacion": "19/04/2023",
"cuo_men": "75"  },
  {
    "id": 5,
    "cliente": "Tienda de Ropa ModaStyle",
    "fecha_creacion": "29/07/2023",
    "cuota_pen": "6",
    "cuo_men": "180"
  },
  {
    "id": 6,
    "cliente": "Cafetería Aromas",
    "cuota_pen": "10",
    "fecha_creacion": "09/07/2023",
    "cuo_men": "250"
  },
  {
    "id": 7,
    "cliente": "Distribuidora de Libros LibroMundo",
    "cuota_pen": "1",
"fecha_creacion": "24/02/2023",
"cuo_men": "100"
  },
  {
    "id": 8,
    "cliente": "Automotriz CarroVeloz",
    "cuota_pen": "3",
    "fecha_creacion": "07/05/2023",
    "cuo_men": "120"
  
  },
  {
    "id": 9,
    "cliente": "Joyería Brillantez",
    "cuota_pen": "3",
  "fecha_creacion": "07/05/2023",
  "cuo_men": "120"

  },
  {
    "id": 10,
    "cliente": "Farmacia SaludTotal",
    "cuota_pen": "3",
  "fecha_creacion": "07/05/2023",
  "cuo_men": "120"
  }
]

const saldoss: React.FC<any> = ({ }) => {
  const verDato = (formulario: IRecordatorio) => {
    console.log("formulario-rec", formulario);
  };

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Antiguedad de Saldos"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              <SaldosReportes/>
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

export default saldoss;
