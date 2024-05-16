import { Button } from "@/components/ui/button";
import React from "react";

const CartItem = () => {
  return (
    <div className="flex flex-col p-5 bg-[#F9F9F9] rounded-lg gap-4 shadow-md xl:gap-6">
      <img
        className="w-full h-[40vw] sm:h-[28vw] md:h-[22vw] lg:h-[18vw] xl:h-[12vw] object-cover rounded-lg"
        src="https://s3-alpha-sig.figma.com/img/d21e/81ad/a17c970a446f7d9b8806f0af09d91142?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aABnpr3TTRsSsV5pBeTD~Fy6L62CzV2WFzoziLqVN8zpvbgn3TMzm7r5-e8p~Dch~EesRlJ2vRsxXEaxO1m0uU6NSBoM3yF2Lip~XOoQBPJbbteaCgyA66xf6BiwFtIOOSS9aBsbOxDT4WEsgdJq2YcaXOSNYaR5GPnByJnmKMl2LLOtbY~yR2gi5mX~GM5k7awLxI5huvwjYAMMoh7pVc4zrhKv2c8DVuUwAplEcT~DGlq23kRhqDGWduLOouRIt7T1825G7XvZlVIoZs65Z2vHlwFV1llty0SZawgRqWOJ-LaKHIRn3GrUe-~eb0b-ndsaA2qSpSLw7jcSmTqUuA__"
        alt=""
      />
      <div>
        <p className="flex justify-between font-semibold text-md xl:text-lg">
          <span>Margherita Pizza</span>
          <span>₹140</span>
        </p>
        <p className="text-xs xl:text-sm">
          A Classic Cheesy Margharita. Can't Go Wrong.
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Button>-</Button>
        <p>10</p>
        <Button>+</Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between text-sm xl:text-lg items-end">
          <p>Subtotal</p>
          <p className="text-primary">
            <span className="text-xl lg:text-2xl">3&nbsp;</span>
            <span>x </span>
            <span>₹140</span>
          </p>
        </div>
        <hr className="border-gray-300" />
        <p className="flex justify-between text-sm xl:text-lg">
          <span>Total</span>
          <span className="text-primary">₹140</span>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
