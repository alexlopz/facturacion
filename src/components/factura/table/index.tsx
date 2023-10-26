import { GridColDef } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { IProducto } from "../../../definitions/IProducto";
import { useEffect, useRef, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DataTable from "./data-table";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const FacturaTable: React.FC<any> = ({ productos, setFormulario }) => {
  const columns: GridColDef[] = [
    { field: "cantidad", headerName: "Cant", editable: true, width: 20 },
    { field: "sku", headerName: "Sku", width: 100 },
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "precio", headerName: "Precio" },
    { field: "total", headerName: "Total" },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <IconButton
          aria-label="delete"
          size="small"
          color="success"
          onClick={(e) => agregarProductoDetalle(e, params)}
        >
          <AddCircleIcon fontSize="small" />
        </IconButton>,
        <IconButton
          aria-label="delete"
          size="small"
          color="error"
          onClick={(e) => restarProducto(e, params)}
        >
          <RemoveCircleIcon fontSize="small" />
        </IconButton>,
      ],
    },
  ];

  const [producto, setProducto] = useState<IProducto | null>(null);
  const [detalleProductos, setDetalleProductos] = useState<any[]>([]);
  const [granTotal, setGranTotal] = useState<number>(0);

  const autocompleteRef = useRef();

  const agregarProductoDetalle = (
    e: React.MouseEvent<HTMLButtonElement>,
    params: any
  ) => {
    const detalleProductosCopy = [...detalleProductos];

    const productId = producto?.id || params.row.id;

    const productoExistente = detalleProductosCopy.find(
      (item) => item.id === productId
    );
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      detalleProductosCopy.push({ ...producto, cantidad: 1 });
    }
    // setDetalleProductos(detalleProductosCopy);

    const detalleProductosConTotales = detalleProductosCopy.map((item) => ({
      ...item,
      total: item.cantidad * item.precio,
    }));
    setDetalleProductos(detalleProductosConTotales);
    setProducto(null);

    setGranTotal(
      detalleProductosConTotales
        .reduce((total, item) => total + item.total, 0)
        ?.toFixed(2)
    );
  };

  const restarProducto = (
    e: React.MouseEvent<HTMLButtonElement>,
    params: any
  ) => {
    const detalleProductosCopy = [...detalleProductos];
    const productoExistente = detalleProductosCopy.find(
      (item) => item.id === params.row.id
    );

    if (productoExistente) {
      productoExistente.cantidad -= 1;
      if (productoExistente.cantidad === 0) {
        const index = detalleProductosCopy.indexOf(productoExistente);
        detalleProductosCopy.splice(index, 1);
      }
    }
    // setDetalleProductos(detalleProductosCopy);
    const detalleProductosConTotales = detalleProductosCopy.map((item) => ({
      ...item,
      total: (item.cantidad * item.precio).toFixed(2),
    }));
    setDetalleProductos(detalleProductosConTotales);
    setGranTotal(
      detalleProductosConTotales
        .reduce((total, item) => total + item.total, 0)
        .toFixed(2)
    );
  };

  const actualizarTotales = () => {
    const detalleProductosCopy = detalleProductos.map((item) => ({
      ...item,
      total: (item.cantidad * item.precio).toFixed(2),
    }));
    setDetalleProductos(detalleProductosCopy);
  };

  console.log("producto", producto);
  console.log("detalleProductos", detalleProductos);

  useEffect(() => {
    if (detalleProductos.length > 0) {
      console.log("detalleProductos", detalleProductos);
      setFormulario({ detalle: detalleProductos, monto: granTotal });
    }
  }, [detalleProductos]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          margin: "-16px -16px 16px -16px",
          padding: "5px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Detalle
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <FormControl fullWidth sx={{ minWidth: 300 }}>
            <Autocomplete
              ref={autocompleteRef}
              disablePortal
              id="Producto"
              options={productos}
              getOptionLabel={(option: any) =>
                `${option.nombre} - ${option.sku}`
              }
              onChange={(event: any, value: IProducto) => {
                setProducto(value);
              }}
              renderInput={(params) => (
                <TextField {...params} name="producto" label="Productos" />
              )}
            />
            <FormHelperText>Puedes buscar por nombre o sku</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ height: 50 }}
            startIcon={<AddOutlinedIcon />}
            disabled={producto === null}
            onClick={(e) => agregarProductoDetalle(e, null)}
          >
            Agregar
          </Button>
        </Grid>
      </Grid>
      {detalleProductos.length > 0 && (
        <>
          <DataTable rows={detalleProductos} columns={columns} />
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
            <Typography variant="h3">Q {granTotal}</Typography>
          </Box>
        </>
      )}
    </>
  );
};

export default FacturaTable;
