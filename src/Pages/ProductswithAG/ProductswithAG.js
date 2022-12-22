//Hooks
import React, { useEffect, useMemo, useState } from "react";

//Components and functions
import { AgGridReact } from "ag-grid-react";

//Style
import "./ProductswithAg.scss";

//APIs
import AxiosGet from "../../API/AxiosGet";
import { Axios_Route } from "../../API/AxiosRoutes";

function ProductswithAG() {
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    { field: "id", width: 300, filter: true, floatingFilter: true },
    { field: "title", width: 350, filter: true, floatingFilter: true },
    { field: "price", width: 350, filter: true, floatingFilter: true },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  useEffect(() => {
    AxiosGet(Axios_Route.getProducts).then((data) => {
      const rowProductData = data.products.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
        };
      });
      setRowData(rowProductData);
    });
  }, []);

  return (
    <div className="grid-wrapper">
      <div
        className="ag-theme-alpine"
        style={{ height: "1400px", width: "1000px" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default ProductswithAG;
