//import moneyFormat
import moneyFormat from "../../../utils/moneyFormat";

export default function ProductList({ products }) {
  return (
    <div className="row mt-3">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="col-4" key={product.id}>
            <div className="card card-link card-link-pop mt-3 rounded">
              <div className="ribbon bg-success mt-3">
                <h4 className="mb-0">{moneyFormat(product.sell_price)}</h4>
              </div>
              <div className="card-body text-center">
                <img
                  src={`${import.meta.env.VITE_APP_BASEURL}/${product.image}`}
                  alt={product.title}
                  className="me-2 rounded"
                />
                <h4 className="mb-0 mt-2">{product.title}</h4>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-danger mb-0">Product not available</div>
      )}
    </div>
  );
}
