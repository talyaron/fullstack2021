import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

interface LayoutRouterProps {
  // why is it screaming when i set the Array type to LayoutProps?
  iceCreamShopLayouts: Array<any>;
}

interface LayoutsProps {
  name: string;
  combinations: Array<string>;
}

function LayoutRouter(props: LayoutRouterProps) {
  const { iceCreamShopLayouts } = props;

  return (
    <div className="layout__router">
      <ul className="layout__router_menu">
        {iceCreamShopLayouts.map((layout, i) => {
          return (
            <li key={i}>
              <Link to={`${layout.name}`}>
                {layout.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

export default LayoutRouter;
