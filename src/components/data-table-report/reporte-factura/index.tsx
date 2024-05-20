import { GridColDef } from "@mui/x-data-grid";
import { Box, Button, Card, Typography } from "@mui/material";
import DataTable from "../../data-table";
import { useEffect, useState } from "react";
import { getFacturas } from "../../../services/facturas";
import { IPlainObject } from "../../../definitions/IPlainObject";
import DetalleFactura from "../../factura-detalle-modal";

const ReporteFactura: React.FC<any> = ({ productos, monto }) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID factura", width: 100 },
    {
      field: "factura.clienteInfo",
      headerName: "Cliente",
      valueGetter: (params) => params.row.infoCliente.nombre,
      width: 200,
    },
    {
      field: "monto",
      headerName: "Monto",
    },
    { field: "fecha_creacion", headerName: "Fecha creacion", width: 200  },
    { field: "fecha_vencimiento", headerName: "Fecha vencimiento", width: 200  },
    {
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={(e:any) => detalleFactura(e, params.row.id)}
        >
          Ver
        </Button>
      ],
    },
  ];

  const [facturas, setFacturas] = useState<IPlainObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [factura, setFactura] = useState<any>();
  const [openModal, setOpenModal] = useState(false);

  const detalleFactura = (e: any, facturaId: any) => {
    setOpenModal(true)
    setFactura(facturaId)
  }

  const traerFacturas = async () => {
    setLoading(true);
    const response = await getFacturas();
    if (response.length > 0) {
      setFacturas(response);
      setLoading(false);
    }
  };
  useEffect(() => {
    traerFacturas();
  }, []);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          padding: "5px",
          boxShadow: "none",
          border: "1px solid rgba(224, 224, 224, 1)",
          marginBottom: '-1px',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Detalle
        </Typography>
      </Card>
      <DataTable rows={facturas} columns={columns} loading={loading}/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "end",
          mt: 2,
        }}
      >
        <Typography variant="h5">Total:</Typography>
        <Typography variant="h3">Q {monto}</Typography>
      </Box>
      {openModal && factura && (
        <DetalleFactura
          facturaId={factura}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default ReporteFactura;
