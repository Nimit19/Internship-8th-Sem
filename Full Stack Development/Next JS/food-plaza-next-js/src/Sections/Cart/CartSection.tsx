import ContentWrapper from "@/Layouts/ContentWrapper";
import React from "react";
import CartItem from "./CartItem";

const CartSection = () => {
  return (
    <ContentWrapper>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4  py-5 ">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </ContentWrapper>
  );
};

export default CartSection;
