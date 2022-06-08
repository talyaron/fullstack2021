import React from "react";
import { Link } from "react-router-dom";

const ListBuy = () => {
  const List = [
    { id: "123", name: "milk" },
    { id: "234", name: "water" },
    { id: "345", name: "apple" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {List.map((product) => {
        return (
          <Link to={product.id} key={product.id}>
            {product.name}
          </Link>
        );
      })}
    </div>
  );
};

export default ListBuy;
