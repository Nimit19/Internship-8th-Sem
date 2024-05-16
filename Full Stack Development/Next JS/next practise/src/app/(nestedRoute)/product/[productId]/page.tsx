import React from "react";

const ProductDetailsPage = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <div>Product Details Page: {params.productId}</div>;
};

export default ProductDetailsPage;
