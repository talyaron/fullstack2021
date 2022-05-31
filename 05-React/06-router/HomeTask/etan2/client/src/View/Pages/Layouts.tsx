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
    <div className={`layout__wrapper-${name}`}>
      <div className="layout__flavour-question">
        {" "}
        <p>
          Would you like any of these combinations with your {name} Ice Cream?
        </p>
          </div>
        <ul className="layout__flavour-menu">
          {combinations.map((combination, i) => {
            const combinationPath = combination.replace(/\s/g, "");
            return( <li
              key={i}
            >
            <Link  to={combinationPath}>{`${combination}`}</Link>
            </li>
            )
          })}
        </ul>

        <Outlet/>

    </div>
  );
}

export default Layouts;
