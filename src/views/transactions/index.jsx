//import useState, useEffect
import { useState, useEffect } from "react";

//import layout admin
import LayoutAdmin from "../../layouts/admin";

//import service api
import Api from "../../services/api";

//import js cookie
import Cookies from "js-cookie";

//import component product list
import ProductList from "./components/ProductList";

//import component pagination
import PaginationComponent from "../../components/Pagination";

export default function TransactionsIndex() {
  //state products
  const [products, setProducts] = useState([]);

  //define state "pagination"
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 0,
    total: 0,
  });

  //token
  const token = Cookies.get("token");

  //function "fetchProducts"
  const fetchProducts = async (pageNumber) => {
    if (token) {
      //define variable "page"
      const page = pageNumber ? pageNumber : pagination.currentPage;

      //set authorization header with token
      Api.defaults.headers.common["Authorization"] = token;

      await Api.get(`/api/products?page=${page}&limit=9`).then((response) => {
        //set data response to state "products"
        setProducts(response.data.data);

        //set data response to state "pagination"
        setPagination({
          currentPage: response.data.pagination.currentPage,
          perPage: response.data.pagination.perPage,
          total: response.data.pagination.total,
        });
      });
    }
  };

  //hook
  useEffect(() => {
    //call function "fetchProducts"
    fetchProducts();
  }, []);

  return (
    <LayoutAdmin>
      <div className="page-body">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-8 mb-3">
              {/* Search and Scan Barcode */}

              {/* Category List */}

              {/* Product List */}
              <ProductList products={products} />

              {/* Pagination */}
              <div className="row mt-3">
                <PaginationComponent
                  currentPage={pagination.currentPage}
                  perPage={pagination.perPage}
                  total={pagination.total}
                  onChange={(pageNumber) => fetchProducts(pageNumber)}
                  position="center"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-header p-3">
                  <h3 className="mb-0">ORDER ITEMS</h3>
                </div>
                <div className="card-body scrollable-card-body p-0">
                  {/* Order Items */}
                </div>
                <div className="card-body">
                  <div className="mt-3">
                    <h3 className="float-end"></h3>
                    <h3 className="mb-0">Total</h3>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
