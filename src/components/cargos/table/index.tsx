import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import DataTable from "../../data-table";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Typography } from "@mui/material";

const CargosTable: React.FC<any> = ({ cargos, handlerClick }) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 75 },
    { field: "cliente", headerName: "Cliente", width: 200 },
    { field: "factura", headerName: "No. Factura", width: 100 },
    { field: "concepto", headerName: "Concepto", width: 200 },
    { field: "monto", headerName: "Monto" },
    {
      field: "actions",
      type: "actions",
      width: 10,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<VisibilityIcon color="success" />}
          label="Delete"
          onClick={(e) => handlerClick(e, params.row)}
        />,
      ],
    },
  ];

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}
      >
        <Typography variant="h6" gutterBottom>
          Listado de cargos aplicados
        </Typography>
      </Box>
      <DataTable rows={cargos} columns={columns} />
    </>
  );
};

export default CargosTable;
