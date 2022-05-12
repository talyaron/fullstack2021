import React from "react";

interface Name {
  name: string;
}

const ListItem = (props: Name) => {
  const { name } = props; //const name = props.name

  return <li>{name}</li>;
};

export default ListItem;
