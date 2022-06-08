import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const params = useParams();
  console.log(params);
  const { product } = params;
  console.log(product);

  const [itemProduct, setItemProduct] = useState({});

  const List = [
    { id: "123", name: "milk" },
    { id: "234", name: "water" },
    { id: "345", name: "apple" },
  ];

  useEffect(() => {
    setItemProduct(List.filter((item) => item.id === product)[0]);
  }, []);

  console.log(itemProduct);

  return (
    <div>
      <h1>id: {product}</h1>
      <p>{itemProduct ? <div>{itemProduct.name}</div> : <div>Loading</div>}</p>
    </div>
  );
};

export default Item;
