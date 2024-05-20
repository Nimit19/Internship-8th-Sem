import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

const PopularFoodItemCardSkeleton = () => {
  return (
    <>
      <div className="border-2 border-[#ECEEF6] flex flex-col items-center relative rounded-md md:rounded-xl min-w-48 h-[285px] md:min-w-80 md:h-[475px] p-2 md:p-6">
        <Skeleton className="w-32 h-32 md:w-56 md:h-56 rounded-full" />
        <div className="flex justify-between items-center w-full pt-4 md:pt-8">
          <Skeleton className="h-4 w-[70%]" />
          <Skeleton className="h-4 w-[25%]" />
        </div>
        <div className="w-full flex flex-col gap-1 py-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[50%]" />
        </div>
        <Skeleton className="h-8 w-20  absolute bottom-9 md:bottom-16" />
        <div className="absolute  bg-white border-[#ECEEF6] border-r-2 border-b-2 h-14 w-14 md:h-20 md:w-20 transform rotate-45  rounded-br-[20px] md:rounded-br-[28px] bottom-[-29px] md:bottom-[-41px] z-2" />
        <div className="absolute  flex justify-center items-center border-[#ECEEF6] border-2 h-10 w-10 md:w-14 md:h-14 rounded-full bottom-[-25px] md:bottom-[-30px]  z-5">
          <Skeleton className="w-3 h-3 md:w-4 md:h-4 " />
        </div>
      </div>
    </>
  );
};

export default PopularFoodItemCardSkeleton;
