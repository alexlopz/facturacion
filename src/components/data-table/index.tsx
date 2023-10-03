import { DataGrid } from "@mui/x-data-grid";
import { ITable } from "./type";

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
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          hideFooterSelectedRowCount
        />
      </div>
    </div>
  );
};

export default DataTable;
