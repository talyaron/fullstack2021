import { useState } from "react";

interface Lobi {
  name: string;
  year: number;
  price: number;
  id: string;
}

const Lobi = () => {

  function handlesubmit(ev:any) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const year =  ev.target.elements.year.value;
    const price = ev.target.elements.price.value;
  }
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }


  const Movies = [{ name: "", year: 1997, price: 10, id: uid() }];
  return (
    <div>
      <form onSubmit={(id) => handlesubmit(id)}>
        <input type="text" name="name" placeholder="name of movie" />
        <input type="month" name="year" />
        <input type="number" name="price" placeholder="price" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Lobi;
