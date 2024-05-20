import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
  useGridApiContext,
} from "@mui/x-data-grid";
import { ITable } from "./type";
import { IPlainObject } from "../../definitions/IPlainObject";
import ReporteFactura from "./reporte-factura";

const DataTableReport: React.FC<IPlainObject> = ({ tipoReporte }) => {
  const renderComponent = () => {
    switch (tipoReporte) {
      case "FACTURAS":
        return <ReporteFactura />;
      case "RECIBO":
        return <ReporteFactura />;
      case "SOLICITUDES":
        return <ReporteFactura />;
      default:
        return <div>Component por defecto</div>;
    }
  };

  // const CustomToolbar = () => {
  //   const apiRef = useGridApiContext();

  // return (
  // <GridToolbarContainer
  //   sx={{
  //     display: "flex",
  //     justifyContent: "space-between",
  //     margin: "10px 5px",
  //   }}
  // >
  //   <Box>
  //     <Tooltip title="Descargar CSV">
  //       <IconButton
  //         aria-label="delete"
  //         size="large"
  //         onClick={() => apiRef.current.exportDataAsCsv()}
  //       >
  //         <FileDownloadOutlinedIcon fontSize="inherit" />
  //       </IconButton>
  //     </Tooltip>
  //     <Tooltip title="Imprimir">
  //       <IconButton
  //         aria-label="print"
  //         size="large"
  //         onClick={() => apiRef.current.exportDataAsPrint()}
  //       >
  //         <LocalPrintshopOutlinedIcon fontSize="inherit" />
  //       </IconButton>
  //     </Tooltip>
  //   </Box>
  //   <GridToolbarColumnsButton />
  //   <GridToolbarFilterButton />
  //   <GridToolbarDensitySelector />
  //   <GridToolbarQuickFilter />
  // </GridToolbarContainer>
  //   );
  // };

  return <>{renderComponent()}</>;
};

export default DataTableReport;
