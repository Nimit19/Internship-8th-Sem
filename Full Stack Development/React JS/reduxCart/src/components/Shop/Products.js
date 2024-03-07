import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    title: "Alu Puri",
    price: 30,
    description: "Crunchy and delicious",
  },
  {
    id: "p2",
    title: "Burger",
    price: 149,
    description: "A german specialty!",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id = {item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
