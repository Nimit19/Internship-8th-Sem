import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 1000);
  });
  return {
    title: { absolute: `Product ${title}` },
  };
};
const ProductDetailsPage = ({ params }: Props) => {
  return <div>Product Details Page: {params.productId}</div>;
};

export default ProductDetailsPage;
