import { Alert, Card, CardContent, Grid, Snackbar } from "@mui/material";
import { GetServerSideProps } from "next";
import DashboardLayout from "../../src/layout/DashboardLayout";
import { getClientes } from "../../src/services/clientes";
import { useState } from "react";
import FacturaForm from "../../src/components/factura/form";
import { getProductos } from "../../src/services/productos";
import FacturaTable from "../../src/components/factura/table";
import { crearDetalleFactura, crearFactura } from "../../src/services/facturas";
import { useRouter } from "next/router";

const Factura: React.FC<any> = ({ clientes, productos }) => {
  const [formulario, setFormulario] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpeAlert] = useState<boolean>(false);

  const router = useRouter();

  const guardarFactura = async (
    event: React.ChangeEvent<HTMLInputElement>,
    cliente: any
  ) => {
    event.preventDefault();
    setLoading(true);
    setFormulario({
      ...formulario,
      cliente: cliente.id,
    });
    const factura = await crearFactura({ ...formulario, cliente: cliente.id });
    if (factura?.id) {
      await crearDetalleFactura({
        detalle: formulario.detalle,
        facturaId: factura.id,
      });
      setOpeAlert(true);
      router.reload();
    } else {
      setLoading(false);
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpeAlert(false);
    router.reload();
  };

  const styleCard = { minHeight: "700px" };
  return (
    <DashboardLayout title={"Crear nueva factura"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Card variant="outlined" sx={styleCard}>
            <CardContent>
              <FacturaForm
                clientes={clientes}
                handleSubmit={guardarFactura}
                formulario={formulario}
                loading={loading}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card variant="outlined" sx={styleCard}>
            <CardContent>
              <FacturaTable
                productos={productos}
                setFormulario={setFormulario}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={openAlert}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }} variant="filled">
          Factura guardada con exito!
        </Alert>
      </Snackbar>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clientes = await getClientes();
  const productos = await getProductos();
  return {
    props: {
      clientes,
      productos,
    },
  };
};

export default Factura;
