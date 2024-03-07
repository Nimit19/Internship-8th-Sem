import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();
  return <>
  <h1>Product Details</h1>
  <div>{params.productId}</div>
  </>;
};

export default ProductDetailsPage;
