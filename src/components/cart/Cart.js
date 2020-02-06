import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./cartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from './CartList';
import CartTotals from './cartTotals'
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {vaalue => {
            const { cart } = vaalue;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="cart" />
                  <CartColumns />
                  <CartList vaalue={vaalue}/>
                  <CartTotals vaalue={vaalue} history={this.props.histroy}/>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
