import React from "react";

const FoodItemByWeather = () => {
  return (
    <div className="">
      <img
        src="https://s3-alpha-sig.figma.com/img/ac13/e53c/a79b8d8b34ddcd34ca4ba4d73a02b202?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxeUnIkBCQoFS3LJgNztqmamQqTBKc94KZhSQ6UacepZiX0XCiu-sNkiJGr6qaAsmEcJEDIWANgw8-LbaH7ZX1FlEYKWWhzfrcpc~5bPAUfH2EImx23dYZ5uDeosQiCtqwyGsm6C5EgGMo5CLJR8ab7QZH28FkqNXSe26nruAQGmtl8EnPWhH2TWzHIjXsrdw5L5NK3B07p2ZfLNrxTyFgqk6pDPtM3g9cs05v~xS69C3-fZFTrOwlFoaEba9q4-433dZb4kRWvM4AQhHkp346eiPj4~5-o5eOs7QDP1VqGG-5Z3Khznzrz-O2LLXjWgtJ~aO-V72ZHEwlf-FBdjqQ__"
        alt=""
        className="w-full h-48 sm:3/4 rounded-xl object-cover lg:h-3/4"
      />
      <div className="my-4">
        <span className="font-bold">Vadapav</span>
        <span className="block text-gray-500 text-sm">20 Min</span>
      </div>
    </div>
  );
};

export default FoodItemByWeather;
