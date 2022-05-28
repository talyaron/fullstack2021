import React from 'react';

import { Outlet, Link } from "react-router-dom";

// import {Outlet ,Link} from 'react-router-dom';
interface LayoutsProps {
  name?: string;
  combinations: Array<string>;
  iceCreamShopCombinations: Array<string>;
}

function Layouts(props: LayoutsProps) {
  const { name, combinations, iceCreamShopCombinations } = props;

  return (
    <div className={`layouts__wrapper-${name}`}>
      <div className="layouts__question">
        {" "}
        <p>
          Would you like any of these combinations with your {name} Ice Cream?
        </p>
        <div className="layouts__menu">
          {combinations.map((combination, i) => {
            const combinationPath = combination.replace(/\s/g, "");
            return <Link key={i} to={combinationPath}>{`${combination}`}</Link>;
          })}
        </div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Layouts;
