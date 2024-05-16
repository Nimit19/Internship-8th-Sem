import { notFound } from "next/navigation";
import React from "react";

const page = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (+params.reviewId >= 1000) {
    notFound();
  }
  return (
    <div>
      Review ID {params.productId} for product ID {params.reviewId}
    </div>
  );
};

export default page;
