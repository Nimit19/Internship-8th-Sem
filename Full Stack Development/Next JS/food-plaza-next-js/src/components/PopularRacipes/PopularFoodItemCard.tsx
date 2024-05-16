import { Assets } from "@/assets";
import Image from "next/image";
import React from "react";

const PopularFoodItemCard = () => {
  return (
    <div className="border-2 border-[#ECEEF6] flex flex-col items-center relative rounded-md md:rounded-xl min-w-48 h-[285px] md:min-w-80 md:h-[475px] p-2 md:p-6">
      <img
        className="w-32 h-32 md:w-52 md:h-52"
        src="https://s3-alpha-sig.figma.com/img/df8d/9e89/63ff2383b52cd4c31c2febddd7d6c295?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZV7nMAtjiIJE6fI5Y3Gy-AAsf29h7oeC12PmtJfz3uEl~zCEic7Qx~HvEFr4DtPuq92V~cT2cMlw5BKLG1prH3-CTs4xvKvZeupoGJDDOI5GR4Yq9GxStvJz-YPX-8te3F~xqvWfmKyQAyN7JCq9lcoxUkakjhTcEUiEi1963oBEVfqRTLt1TM1824SaKwo130go4PrJZGhO5YR7rxghxrTksuTXDJqNUdkHe1weR7NFmzf~~khQvCEMvXJiv1yBDFcgCKyyogiYorNqr211oIy-jKwvwWHaHrDC6KpGVbTbqbG-F0I-857PcK3c6Gfu5CDr9xNKzqeAdVZ5QUZkIA__"
        alt=""
      />
      <p className="flex justify-between w-full pt-4 md:pt-8">
        <span className="text-sm font-semibold md:text-lg">Sicilian pizza</span>
        <span className="text-xs md:text-sm">32mins</span>
      </p>
      <p className="text-xs md:text-sm">
        Dough, Mozzarella, Cheddar, Blue, Parmesan
      </p>
      <p className="text-md md:text-xl font-light  absolute bottom-9 md:bottom-16">
        500
      </p>
      <div className="absolute  bg-white border-[#ECEEF6] border-r-2 border-b-2 h-14 w-14 md:h-20 md:w-20 transform rotate-45  rounded-br-[20px] md:rounded-br-[28px] bottom-[-29px] md:bottom-[-41px] z-2"></div>
      <div className="absolute  flex justify-center items-center border-[#ECEEF6] border-2 h-10 w-10 md:w-14 md:h-14 rounded-full bottom-[-25px] md:bottom-[-30px]  z-5  ">
        <Image
          className="w-3 h-3 md:w-4 md:h-4"
          src={Assets.pngs.CART_LOGO}
          alt="cart"
        />
      </div>
    </div>
  );
};

export default PopularFoodItemCard;
