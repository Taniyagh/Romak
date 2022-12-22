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

function ProductswithPagination() {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState([]);
  const [skip, setSkip] = useState("0");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //Get products data
    AxiosGet(Axios_Route.getProducts, { limit: 30, skip: skip }).then(
      (data) => {
        setIsLoading(false);
        setProducts(data.products);

        //Calculating the number of pages
        let pageNumber = Math.floor(data.total / data.limit);

        if (data.total % data.limit > 0) {
          pageNumber += 1;
        }

        for (let i = 0; i < pageNumber; i++) {
          pages[i] = i;
          setPages(() => pages);
        }
      }
    );
  }, [skip]);

  //Setting pages data
  const handlepage = (page) => {
    setSkip(page.toString() * 30);
  };

  return (
    <>
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
        <div className="products-table-with-pagination-container">
          <div className="table-component-holder">
            <Table rowData={products} TableHeaders={["Id", "Title", "Price"]} />
          </div>
          <div className="pagination-frame">
            {pages.map((page) => {
              console.log(page);
              return (
                <span
                  className={`box-page ${
                    skip === Number(page) * 30 ? "selected-page" : ""
                  }`}
                  onClick={() => handlepage(page)}
                >
                  {page}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductswithPagination;
