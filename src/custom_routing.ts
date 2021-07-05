import _, { xor } from "lodash";
import { buildGraph, EdgeAttributes, RouteGraph } from "./graph";
import { PlaceName, RAILWAYS, SETTLEMENTS } from "./raw_data";

type NodeIdentifier = string;

interface Edge extends EdgeAttributes {
  from: NodeIdentifier;
  to: NodeIdentifier;
}

interface GraphAccessor {
  allNodes(): NodeIdentifier[];
  edgesFor(n: NodeIdentifier): Edge[];
}

export interface BestRoute {
  route: Edge[];
  totalDurationSecs: number;
}

export function findRoutes(start: PlaceName) {
  const g = buildGraph();
  return findFastestRoutes(g, start);
}
export function findFastestRoutes(graph: RouteGraph, start: PlaceName) {
  const dist = new Map<NodeIdentifier, BestRoute>(
    graph
      .nodes()
      .map((n) => [n, { route: [], totalDurationSecs: n === start ? 0 : Infinity }])
  );

  let q = graph.nodes();

  while (!_.isEmpty(q)) {
    q = _.sortBy(q, (n) => dist.get(n)!.totalDurationSecs);
    console.log("sorted queue", q);

    const nodeToCheck = q.shift()!;
    const bestRouteToV = dist.get(nodeToCheck)!;

    console.log(
      `processing ${nodeToCheck}, best route to here is `,
      JSON.stringify(bestRouteToV)
    );

    graph.forEachUndirectedEdge(nodeToCheck, (_, attr, a, b) => {
      const target = a === nodeToCheck ? b : a;
      const edge: Edge = {
        from: nodeToCheck,
        to: target,
        ...attr
      };
      const altCost = bestRouteToV.totalDurationSecs + attr.durationSecs;
      if (altCost < dist.get(target)!.totalDurationSecs) {
        const newBestRoute = {
          route: [...bestRouteToV.route, edge],
          totalDurationSecs: altCost,
        };
        console.log(`updating best route to ${target}`, newBestRoute);
        dist.set(target, newBestRoute);
      }
    });
  }

  return dist;
}

export function tackersAndFriendsRouteTest() {


  findRoutes("Forest Town");
}
