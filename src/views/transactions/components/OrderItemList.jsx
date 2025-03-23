//import moneyFormat
import moneyFormat from "../../../utils/moneyFormat";

export default function OrderItemList({ carts }) {

    return (
        <div className="card-body scrollable-card-body">
            <div className="row">
                {carts.map((cart) => (
                    <div className='col-12 mb-2' key={cart.id}>
                        <div className="card rounded">
                            <div className="card-body d-flex align-items-center">
                                <img
                                    src={`${import.meta.env.VITE_APP_BASEURL}/${cart.product.image}`}
                                    alt={cart.product.title}
                                    width={50}
                                    height={50}
                                    className="me-3 rounded"
                                />
                                <div className="flex-fill">
                                    <h4 className="mb-0">{cart.product.title}</h4>
                                    <p className="text-success mb-0 mt-1">{moneyFormat(cart.price)}</p>
                                    <hr className="mb-1 mt-1"/>
                                    <p className="text-muted mb-0">Qty: {cart.qty}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}