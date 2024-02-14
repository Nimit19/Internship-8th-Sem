import Card from "./Card";
import useCounter from "../hooks/counter-hook";

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
