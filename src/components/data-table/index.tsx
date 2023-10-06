import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ITable } from "./type";

const customLocaleText = {
  // Cambia el texto para la paginación
  pagination: {
    next: 'Siguiente',
    previous: 'Anterior',
    labelRowsPerPage: 'Filas por página:',
    labelRowsSelect: 'Filas',
  },
  // Cambia el texto para la selección de columnas
  toolbarColumns: 'Columnas',
  // Agrega otros textos personalizados según sea necesario
};

const DataTable: React.FC<ITable> = ({ rows, columns }) => {
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
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          hideFooterSelectedRowCount
          slots={{ toolbar: GridToolbar }}
          localeText={customLocaleText}
        />
      </div>
    </div>
  );
};

export default DataTable;
