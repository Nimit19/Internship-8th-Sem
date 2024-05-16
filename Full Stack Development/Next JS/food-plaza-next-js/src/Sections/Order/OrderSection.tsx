"use client";

import { Button } from "@/components/ui/button";
import ContentWrapper from "@/Layouts/ContentWrapper";
import React, { useState } from "react";

const OrderSection = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <ContentWrapper>
      <div>
        <p>Order history</p>
        <p>
          Check the status of recent orders, manage returns, and download
          invoices.
        </p>
      </div>

      <div className="flex flex-col gap-5 py-10">
        <div key={1} className="border border-primary rounded-md">
          <div className="bg-gray-50 px-6  py-4 items-center rounded-lg md:flex  md:flex-row md:justify-between">
            <div className="flex flex-col md:flex-row md:gap-5 ">
              <div className="flex justify-between border-b-2 py-4 md:flex-col md:border-none  ">
                <p>Order number</p>
                <p>WU88191111</p>
              </div>
              <div className="flex justify-between  border-b-2 py-4 md:flex-col md:border-none ">
                <p>Date placed</p>
                <p>January 22, 2021</p>
              </div>
              <div className="flex justify-between  py-4 md:flex-col md:border-none ">
                <p>Total amount</p>
                <p>$302.00</p>
              </div>
            </div>

            <div className="flex gap-5 flex-col pt-5 sm:flex-row md:pt-0">
              <Button
                intent={"secondary"}
                size={"sm"}
                className="h-[42px] sm:w-full md:w-[150px]"
              >
                View Invoice
              </Button>
              <Button
                intent={"secondary"}
                size={"sm"}
                className="h-[42px] sm:w-full md:w-[150px]"
                onClick={() => setIsActive(!isActive)}
              >
                View Order
              </Button>
            </div>
          </div>

          {isActive && (
            <div className="w-full mt-5 px-6 py-4 flex flex-col gap-10">
              <div className="flex flex-row gap-5 items-center md:items-start ">
                <div className="text-xl">1</div>
                <div className="h-24 w-24 md:h-32 md:w-32">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/d21e/81ad/a17c970a446f7d9b8806f0af09d91142?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aABnpr3TTRsSsV5pBeTD~Fy6L62CzV2WFzoziLqVN8zpvbgn3TMzm7r5-e8p~Dch~EesRlJ2vRsxXEaxO1m0uU6NSBoM3yF2Lip~XOoQBPJbbteaCgyA66xf6BiwFtIOOSS9aBsbOxDT4WEsgdJq2YcaXOSNYaR5GPnByJnmKMl2LLOtbY~yR2gi5mX~GM5k7awLxI5huvwjYAMMoh7pVc4zrhKv2c8DVuUwAplEcT~DGlq23kRhqDGWduLOouRIt7T1825G7XvZlVIoZs65Z2vHlwFV1llty0SZawgRqWOJ-LaKHIRn3GrUe-~eb0b-ndsaA2qSpSLw7jcSmTqUuA__"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-lg">
                  <p className="font-semibold">Margherita Pizza</p>
                  <p className="font-semibold">₹140</p>
                  <p className="text-blue-600">Buy Again</p>
                </div>
                <hr />
              </div>
              <div className="flex flex-row gap-5 items-center md:items-start">
                <p className="text-xl">2</p>
                <div className="h-24 w-24 md:h-32 md:w-32">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/d21e/81ad/a17c970a446f7d9b8806f0af09d91142?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aABnpr3TTRsSsV5pBeTD~Fy6L62CzV2WFzoziLqVN8zpvbgn3TMzm7r5-e8p~Dch~EesRlJ2vRsxXEaxO1m0uU6NSBoM3yF2Lip~XOoQBPJbbteaCgyA66xf6BiwFtIOOSS9aBsbOxDT4WEsgdJq2YcaXOSNYaR5GPnByJnmKMl2LLOtbY~yR2gi5mX~GM5k7awLxI5huvwjYAMMoh7pVc4zrhKv2c8DVuUwAplEcT~DGlq23kRhqDGWduLOouRIt7T1825G7XvZlVIoZs65Z2vHlwFV1llty0SZawgRqWOJ-LaKHIRn3GrUe-~eb0b-ndsaA2qSpSLw7jcSmTqUuA__"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1 text-sm   md:text-lg">
                  <p className="font-semibold">Margherita Pizza</p>
                  <p className="font-semibold">₹140</p>
                  <p className="text-blue-600">Buy Again</p>
                </div>
                <hr />
              </div>
              <div className="flex flex-row gap-5 items-center md:items-start ">
                <p className="text-xl">3</p>
                <div className="h-24 w-24 md:h-32 md:w-32">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/d21e/81ad/a17c970a446f7d9b8806f0af09d91142?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aABnpr3TTRsSsV5pBeTD~Fy6L62CzV2WFzoziLqVN8zpvbgn3TMzm7r5-e8p~Dch~EesRlJ2vRsxXEaxO1m0uU6NSBoM3yF2Lip~XOoQBPJbbteaCgyA66xf6BiwFtIOOSS9aBsbOxDT4WEsgdJq2YcaXOSNYaR5GPnByJnmKMl2LLOtbY~yR2gi5mX~GM5k7awLxI5huvwjYAMMoh7pVc4zrhKv2c8DVuUwAplEcT~DGlq23kRhqDGWduLOouRIt7T1825G7XvZlVIoZs65Z2vHlwFV1llty0SZawgRqWOJ-LaKHIRn3GrUe-~eb0b-ndsaA2qSpSLw7jcSmTqUuA__"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1 text-sm  md:text-lg">
                  <p className="font-semibold">Margherita Pizza</p>
                  <p className="font-semibold">₹140</p>
                  <p className="text-blue-600">Buy Again</p>
                </div>
                <hr />
              </div>
            </div>
          )}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default OrderSection;
