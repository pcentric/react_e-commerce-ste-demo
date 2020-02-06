import React from "react";
import CartItem from "./CartItem";
export default function CartList({vaalue}) {
  const { cart } = vaalue;

  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={vaalue} />;
      })}
    </div>
  );
}
