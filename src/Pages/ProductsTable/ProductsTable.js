//Hooks
import React, { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

//Components and functions
import ReactLoading from "react-loading";
import Table from "../../Components/Common/Table/Table";

//Styles
import "../../Styles/ProductTables/ProductTables.scss";

//APIs
import AxiosGet from "../../API/AxiosGet";
import { Axios_Route } from "../../API/AxiosRoutes";
import NavigationButton from "../../Components/Common/Buttons/SubmitButton/NavigationButton/NavigationButton";
import { URL_Route } from "../../setup";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    //Get products data
    AxiosGet(Axios_Route.getProducts).then((data) => {
      setIsLoading(false);
      setProducts(data.products);
    });
  }, []);

  return (
    <div className="page-container">
      <div className="navigation-frame">
        <NavigationButton name="Poducts with pagination" clickHandler={()=>navigate(URL_Route.ProductswithPagination)}/>
        <NavigationButton name="Products with AG-Grid" clickHandler={()=>navigate(URL_Route.ProductswithAG)}/>
      </div>
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
    </div>
  );
}

export default ProductsTable;
