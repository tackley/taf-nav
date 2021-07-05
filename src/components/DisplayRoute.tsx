import React, { useMemo } from "react";
import { useEffect } from "react";
import { findFastestRoutes, findRoutes } from "../custom_routing";
import { PlaceName } from "../raw_data";

interface Props {
  from: string | null;
  to: string | null;
}

export const DisplayRoute = (props: Props) => {
  const { from, to } = props;

  const result = useMemo(() => {
    console.log("useMemo running");
    if (!from) return null;
    return findRoutes(from as PlaceName);
  }, [from]);

  if (!from || !to || !result) {
    return <div>Please select from and to!!</div>;
  }

  const route = result.get(to);

  return (
    <div>
      from: {from} to: {to}<br/>
      <pre>
          {JSON.stringify(route, undefined, 2)}
      </pre>
    </div>
  );
};
