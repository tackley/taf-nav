import Graph from "graphology";
import { ToggleSwitches } from "./components/Toggles";
import {
  RAILWAYS,
  ROADWAYS,
  SETTLEMENTS,
  WATERWAYS,
  WAYPOINTS,
} from "./raw_data";

export interface LocationAttributes {
  type: "settlement" | "waypoint";
  legendIdx: number;
}

export interface EdgeAttributes {
  type: "roadway:walk" | "roadway:sprint" | "railway" | "waterway";
  durationSecs: number;
}

export type RouteGraph = Graph<LocationAttributes, EdgeAttributes>;

export function buildGraph(toggles: ToggleSwitches): RouteGraph {
  const g = new Graph<LocationAttributes, EdgeAttributes>({
    type: "undirected",
    multi: true,
  });

  // Places
  Object.entries(SETTLEMENTS).forEach(([k, v]) => {
    g.addNode(k, { legendIdx: v, type: "settlement" });
  });
  Object.entries(WAYPOINTS).forEach(([k, v]) => {
    g.addNode(k, { legendIdx: v, type: "waypoint" });
  });

  // RAILWAYS
  if (toggles.railway) {
    RAILWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "railway", durationSecs: durationSecs });
    });
  }

  // WATERWAYS
  if (toggles.waterway) {
    WATERWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "waterway", durationSecs: durationSecs });
    });
  }

  // ROADWAYS
  ROADWAYS.forEach(([a, b, walkDurationSecs, sprintDurationSecs]) => {
    if (toggles["roadway:walk"]) {
      g.addEdge(a, b, { type: "roadway:walk", durationSecs: walkDurationSecs });
    }

    if (toggles["roadway:sprint"]) {
      g.addEdge(a, b, {
        type: "roadway:sprint",
        durationSecs: sprintDurationSecs,
      });
    }
  });

  return g;
}
