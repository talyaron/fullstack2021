import React from "react";
import { Outlet, Link } from "react-router-dom";

interface VanillaLayoutProps {
  childrenList?: Array<string>;
}

function VanillaLayout(props: VanillaLayoutProps) {
  const { childrenList } = props;
  return (
    <ul>
      {childrenList
        ? childrenList.map((child: string, i) => {
            return (
              <li>
                <Link to={child}>Vanilla {child}</Link>
              </li>
            );
          })
        : null}
      <Outlet />
    </ul>
  );
}

export default VanillaLayout;
