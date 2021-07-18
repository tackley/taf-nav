import _ from "lodash";
import { ToggleSwitches } from "./components/Toggles";
import { buildGraph, EdgeAttributes, RouteGraph } from "./graph";
import { PlaceName } from "./raw_data";

type NodeIdentifier = string;

interface Edge extends EdgeAttributes {
  from: NodeIdentifier;
  to: NodeIdentifier;
}

export interface BestRoute {
  route: Edge[];
  totalDurationSecs: number;
}

export function findRoutesWithFilter(start: PlaceName, toggles: ToggleSwitches) {
  const g = buildGraph(toggles);
  return findFastestRoutes(g, start);
}

export function findRoutes(start: PlaceName) {
  return findRoutesWithFilter(start, {
    "roadway:sprint": true,
    "roadway:walk": true,
    railway: true,
    waterway: true
  })
}

export function findFastestRoutes(graph: RouteGraph, start: PlaceName) {
  const dist = new Map<NodeIdentifier, BestRoute>(
    graph
      .nodes()
      .map((n) => [
        n,
        { route: [], totalDurationSecs: n === start ? 0 : Infinity },
      ])
  );

  let q = graph.nodes();

  while (!_.isEmpty(q)) {
    q = _.sortBy(q, (n) => dist.get(n)!.totalDurationSecs);

    const nodeToCheck = q.shift()!;
    const bestRouteToV = dist.get(nodeToCheck)!;

    graph.forEachUndirectedEdge(nodeToCheck, (_, attr, a, b) => {
      const target = a === nodeToCheck ? b : a;
      const edge: Edge = {
        from: nodeToCheck,
        to: target,
        ...attr,
      };
      const altCost = bestRouteToV.totalDurationSecs + attr.durationSecs;
      if (altCost < dist.get(target)!.totalDurationSecs) {
        const newBestRoute = {
          route: [...bestRouteToV.route, edge],
          totalDurationSecs: altCost,
        };
        dist.set(target, newBestRoute);
      }
    });
  }

  return dist;
}
