import React, {
  useState,
  useEffect,
} from "react";
import AxiosGet from "../../API/AxiosGet";
import { Axios_Route } from "../../API/AxiosRoutes";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import "../../Styles/ProductTables/ProductTables.scss";
import { AgGridReact } from "ag-grid-react";
import { useContainerWidth } from "./useContainerWidth";
import { useWindowSize } from "./useWindowSize";

const ProductswithAGGGG = ({
  onGridReady,
  theme = "ag-theme-alpine",
  debounce = 0,
  ...props
}) => {
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "id", filter: true, floatingFilter: true, width: 320 },
    { field: "title", filter: true, floatingFilter: true, width: 350 },
    { field: "price", filter: true, floatingFilter: true, width: 350 },
  ]);

  const [gridApi, setGridApi] = useState();
  const [windowWidth] = useWindowSize(debounce);
  const { width: containerWidth, ref } = useContainerWidth(debounce);
  useEffect(() => {
    GetProducts();
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [windowWidth, containerWidth, gridApi]);

  function handleGridReady(event) {
    if (onGridReady) {
      onGridReady(event);
    }
    setGridApi(event.api);
  }
  // Example load data from sever

  const GetProducts = () => {
    AxiosGet(Axios_Route.getProducts).then((data) => {
      console.log(data);
      const rowProductData = data.products.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
        };
      });
      console.log(rowProductData);
      setRowData(rowProductData);
      console.log(rowData);
    });
  };

  return (
    <div className="table-component-holder">
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div
        className={theme}
        ref={ref}
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
          onGridReady={handleGridReady}
          rowData={rowData}
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
};

export default ProductswithAGGGG;
