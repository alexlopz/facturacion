import {
  Box,
  Button,
  Card,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IDetalleFactura } from "../../definitions/IDetalleFactura";
import { getFacturaPorId } from "../../services/facturas";
import { formatDateTime } from "../../utilities/formatDateTime";
import CardCliente from "../card-cliente";
import DetalleTable from "./table";

const DetalleFactura: React.FC<IDetalleFactura> = ({
  facturaId,
  openModal,
  setOpenModal,
}) => {
  const [factura, setFactura] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClose = (event: any, reason: string) => {
    if (reason !== "backdropClick") {
      setOpenModal(!openModal);
    }
  };

  const getFactura = async () => {
    setLoading(true);
    const response = await getFacturaPorId(facturaId);
    if (response.length > 0) {
      setFactura(response[0]);
      setLoading(false);
    }
  };
  useEffect(() => {
    getFactura();
  }, []);

  return (
    <Dialog open={openModal} onClose={handleClose} fullWidth maxWidth={"xl"}>
      <DialogTitle>Detalle de factura {factura?.id}</DialogTitle>
      <DialogContent dividers>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "265px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              {factura && (
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
                      marginBottom: "-1px",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Cliente
                    </Typography>
                  </Card>
                  <CardCliente
                    cliente={factura?.infoCliente}
                    fecha={{
                      emision: formatDateTime(
                        factura?.fecha_creacion.toString()
                      ),
                      vencimiento: formatDateTime(
                        factura?.fecha_vencimiento.toString()
                      ),
                    }}
                  />
                </>
              )}
            </Grid>
            <Grid item xs={12} md={7}>
              {factura && (
                <DetalleTable
                  productos={factura?.detalle}
                  monto={factura?.monto}
                />
              )}
            </Grid>
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => setOpenModal(false)}
        >
          CERRAR
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetalleFactura;
