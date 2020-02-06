import React from "react";
import { Link } from "react-router-dom";
import Paypal from "./PaypalButton";
export default function cartTotals({ vaalue, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = vaalue;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitailze text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                typed="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">SubTotal:</span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax:</span>
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">Total:</span>
              <strong>${cartTotal}</strong>
            </h5>
            <Paypal total={cartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
