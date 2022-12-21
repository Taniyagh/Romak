import React, { useEffect, useState } from "react";
import AxiosGet from "../../API/AxiosGet";
import { Axios_Route } from "../../API/AxiosRoutes";
import "../../Styles/ProductTables/ProductTables.scss";
import ReactLoading from "react-loading";

function ProductswithPagination() {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState([]);
  const [skip, setSkip] = useState("0");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(skip);
    setIsLoading(true);
    AxiosGet(Axios_Route.getProducts, { limit: 30, skip: skip }).then(
      (data) => {
        setIsLoading(false);
        console.log(data.products);
        setProducts(data.products);
        let pageNumber = Math.floor(data.total / data.limit);
        if (data.total % data.limit > 0) {
          pageNumber += 1;
        }
        for (let i = 0; i < pageNumber; i++) {
          pages[i] = i;
          setPages(() => pages);
        }
        console.log(pages);
      }
    );
  }, [skip]);

  const handlepage = (page) => {
    console.log("page", page);
    setSkip(page.toString() * 30);
    console.log("skip", skip);
  };

  return (
    <>
      {isLoading ? (
        <div className="loading-frame">
          <ReactLoading type="spin" color="grey" width={"30%"} height={"30%"} />
        </div>
      ) : (
        <div className="products-table-with-pagination-container">
          <div className="table-component-holder">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, key) => {
                  return (
                    <tr key={key}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="pagination-frame">
            {pages?.map((page) => {
              console.log(page);
              return (
                <span
                  className={`box-page ${
                    skip === page.toString() ? "selected-page" : ""
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
