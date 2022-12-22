//Hooks
import React, { useEffect, useState } from "react";

//Components and functions
import ReactLoading from "react-loading";
import Table from "../../Components/Common/Table/Table";

//Styles
import "../../Styles/ProductTables/ProductTables.scss";

//APIs
import AxiosGet from "../../API/AxiosGet";
import { Axios_Route } from "../../API/AxiosRoutes";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    //Get products data
    AxiosGet(Axios_Route.getProducts).then((data) => {
      setIsLoading(false);
      setProducts(data.products);
    });
  }, []);

  return (
    <div className="table-component-holder">
      {isLoading ? (
        <div className="loading-frame">
          <ReactLoading
            type="spin"
            color="#0101cd"
            width={"5%"}
            height={"5%"}
          />
        </div>
      ) : (
        <Table rowData={products} TableHeaders={["Id", "Title", "Price"]} />
      )}
    </div>
  );
}

export default ProductsTable;
