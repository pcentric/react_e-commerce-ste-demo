import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../components/Button";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            title,
            price,
            info,
            img,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* {title} */}
              <div className="row">
                <div className="col-10 text-centered text-slanted text-blue my-5 mx-auto">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="product-img" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize ">
                  <h1>model: {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: {company}
                  </h4>
                  <h4 className="text-black">
                    <strong>
                      price:<span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    info:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "addToCart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
