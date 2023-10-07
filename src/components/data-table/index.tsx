import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  useGridApiContext,
} from "@mui/x-data-grid";
import { ITable } from "./type";

const DataTable: React.FC<ITable> = ({ rows, columns }) => {
  const CustomToolbar = () => {
    const apiRef = useGridApiContext();

    return (
      <GridToolbarContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 5px",
        }}
      >
        <Box>
          <Tooltip title="Descargar CSV">
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => apiRef.current.exportDataAsCsv()}
            >
              <FileDownloadOutlinedIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Imprimir">
            <IconButton
              aria-label="print"
              size="large"
              onClick={() => apiRef.current.exportDataAsPrint()}
            >
              <LocalPrintshopOutlinedIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Box>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  };
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          density={"compact"}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          pageSizeOptions={[5, 10, 15]}
          hideFooterSelectedRowCount
          slots={{ toolbar: CustomToolbar }}
        />
      </div>
    </div>
  );
};

export default DataTable;
