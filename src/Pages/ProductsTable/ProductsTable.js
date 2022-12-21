import React, { useEffect, useState } from "react";
import AxiosGet from "../../API/AxiosGet";
import { Axios_Route } from "../../API/AxiosRoutes";
import "../../Styles/ProductTables/ProductTables.scss";
import ReactLoading from "react-loading";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    AxiosGet(Axios_Route.getProducts).then((data) => {
      setIsLoading(false)
      console.log(data);
      setProducts(data.products);
    });
  }, []);

  return (
    <div className="table-component-holder">
      {isLoading ? (
        <ReactLoading type='spin' color='grey' width={'30%'} height={'30%'}/>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, key) => {
              console.log(product);
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
      )}
    </div>
  );
}

export default ProductsTable;
