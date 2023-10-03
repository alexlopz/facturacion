import { Card, CardContent, Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import DataTable from "../../src/components/data-table";
import { IRecordatorio } from "../../src/components/recordatorios-form/type";
import FiltroReportes from "../../src/components/reportes";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getFacturas } from "../../src/services/facturas";
import VisibilityIcon from "@mui/icons-material/Visibility";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "cliente", headerName: "Cliente", width: 200 },
  { field: "tipo_documento", headerName: "Tipo Documento", width: 150 },
  { field: "numero", headerName: "Numero" },
  { field: "monto", headerName: "Monto" },
  { field: "saldo", headerName: "Saldo" },
  { field: "fecha_creacion", headerName: "Fecha de Creacion", width: 150 },
  { field: "status", headerName: "Estado" },
  { field: "dias_credito", headerName: "Dias credito", width: 100 },
  {
    field: "actions",
    type: "actions",
    getActions: (params) => [
      <GridActionsCellItem
        icon={<VisibilityIcon />}
        label="Delete"
        onClick={(e) => console.log()}
      />,
    ],
  },
];

const pagos = [
  {
      "id": 1,
      "cliente": "Fabrica de Aceros SA",
      "tipo_documento": "Factura",
      "numero": 897654,
      "monto": 140.45,
      "saldo": 230.50,
      "fecha_creacion": "21/03/2023",
      "status": "PENDIENTE DE PAGO",
      "dias_credito": 30
  },
  {
      "id": 2,
      "cliente": "Electrodomésticos Eureka",
      "tipo_documento": "Recibo",
      "numero": 345678,
      "monto": 75.60,
      "saldo": 0.0,
      "fecha_creacion": "15/04/2023",
      "status": "PAGADO",
      "dias_credito": 15
  },
  {
      "id": 3,
      "cliente": "Supermercado Delicias",
      "tipo_documento": "Factura",
      "numero": 123456,
      "monto": 250.75,
      "saldo": 125.30,
      "fecha_creacion": "02/05/2023",
      "status": "PENDIENTE DE PAGO",
      "dias_credito": 45
  },
  {
      "id": 4,
      "cliente": "Ferretería FerroSolutions",
      "tipo_documento": "Nota de Crédito",
      "numero": 987123,
      "monto": 30.20,
      "saldo": 30.20,
      "fecha_creacion": "11/06/2023",
      "status": "PENDIENTE DE PAGO",
      "dias_credito": 60
  },
  {
      "id": 5,
      "cliente": "Tienda de Ropa ModaStyle",
      "tipo_documento": "Factura",
      "numero": 567890,
      "monto": 95.90,
      "saldo": 45.10,
      "fecha_creacion": "29/07/2023",
      "status": "PENDIENTE DE PAGO",
      "dias_credito": 30
  },
  {
      "id": 6,
      "cliente": "Cafetería Aromas",
      "tipo_documento": "Recibo",
      "numero": 234567,
      "monto": 18.75,
      "saldo": 0.0,
      "fecha_creacion": "14/08/2023",
      "status": "PAGADO",
      "dias_credito": 15
  },
  {
      "id": 7,
      "cliente": "Distribuidora de Libros LibroMundo",
      "tipo_documento": "Factura",
      "numero": 789012,
      "monto": 175.30,
      "saldo": 90.20,
      "fecha_creacion": "03/09/2023",
      "status": "PENDIENTE DE PAGO",
      "dias_credito": 45
  },
  {
      "id": 8,
      "cliente": "Automotriz CarroVeloz",
      "tipo_documento": "Factura",
      "numero": 456789,
      "monto": 320.95,
      "saldo": 150.50,
      "fecha_creacion": "22/10/2023",
      "status": "PENDIENTE DE PAGO",
      "dias_credito": 30
  },
  {
      "id": 9,
      "cliente": "Joyería Brillantez",
      "tipo_documento": "Recibo",
      "numero": 123456,
      "monto": 60.10,
      "saldo": 0.0,
      "fecha_creacion": "08/11/2023",
      "status": "PAGADO",
      "dias_credito": 15
  },
  {
      "id": 10,
      "cliente": "Farmacia SaludTotal",
      "tipo_documento": "Factura",
      "numero": 345678,
      "monto": 95.25,
      "saldo": 35.60,
      "fecha_creacion": "27/12/2023",
      "status": "PENDIENTE DE PAGO",
      "dias_credito": 45
  }
]

const Reportes: React.FC<any> = ({}) => {
  const verDato = (formulario: IRecordatorio) => {
    console.log("formulario-rec", formulario);
  };

  const styleTable = { height: "100%" };
  return (
    <DashboardLayout title={"Reportes Varios"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Card variant="outlined" sx={styleTable}>
            <CardContent>
              {/* <VisalinkForm handleSubmit={() => console.log('click')}/> */}
              <FiltroReportes />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card variant="outlined">
            <CardContent>
              <DataTable rows={pagos} columns={columns} />
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

export default Reportes;
