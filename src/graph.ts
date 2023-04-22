import Graph from "graphology";
import { ToggleSwitches } from "./components/Toggles";
import {
  OVERBOATWAYS,
  OVERRAILWAYS,
  OVERROADWAYS,
  NETHERBOATWAYS,
  NETHERRAILWAYS,
  NETHERROADWAYS,
  ENDBOATWAYS,
  ENDRAILWAYS,
  ENDROADWAYS,
  TRANSFERS,
  SETTLEMENTS,
  WAYPOINTS,
} from "./raw_data";

export interface LocationAttributes {
  type: "settlement" | "waypoint";
  legendIdx: number;
}

export interface EdgeAttributes {
  type: "roadway" | "railway" | "boatway" | "transfer";
  durationSecs: number;
}

export type RouteGraph = Graph<LocationAttributes, EdgeAttributes>;

export function buildGraph(toggles: ToggleSwitches): RouteGraph {
  const g = new Graph<LocationAttributes, EdgeAttributes>({
    type: "directed",
    multi: true,
  });

  const overworld = true;
  const nether = true;
  const end = true;
  const sprinting = false;

  // Places
  Object.entries(SETTLEMENTS).forEach(([k, v]) => {
    g.addNode(k, { legendIdx: v, type: "settlement" });
  });
  Object.entries(WAYPOINTS).forEach(([k, v]) => {
    g.addNode(k, { legendIdx: v, type: "waypoint" });
  });

  // Overworld Boatways
  if (toggles.boatway && overworld) {
    OVERBOATWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "boatway", durationSecs: durationSecs });
    });
  }

  // Overworld Railways
  if (toggles.railway && overworld) {
    OVERRAILWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "railway", durationSecs: durationSecs });
    });
  }

  // Overworld Roadways
  if (toggles.roadway && overworld) {
    OVERROADWAYS.forEach(([a, b, durationSecs]) => {
      if (sprinting) {
        g.addEdge(a, b, {
          type: "roadway",
          durationSecs: durationSecs,
        });
      } else {
        g.addEdge(a, b, {
          type: "roadway",
          durationSecs: durationSecs * 1.2,
        });
      }
    });
  }

  // Nether Boatways
  if (toggles.boatway && nether) {
    NETHERBOATWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "boatway", durationSecs: durationSecs });
    });
  }

  // Nether Railways
  if (toggles.railway && nether) {
    NETHERRAILWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "railway", durationSecs: durationSecs });
    });
  }

  // Nether Roadways
  if (toggles.roadway && nether) {
    NETHERROADWAYS.forEach(([a, b, durationSecs]) => {
      if (sprinting) {
        g.addEdge(a, b, {
          type: "roadway",
          durationSecs: durationSecs,
        });
      } else {
        g.addEdge(a, b, {
          type: "roadway",
          durationSecs: durationSecs * 1.2,
        });
      }
    });
  }

  // End Boatways
  if (toggles.boatway && end) {
    ENDBOATWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "boatway", durationSecs: durationSecs });
    });
  }

  // End Railways
  if (toggles.railway && end) {
    ENDRAILWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "railway", durationSecs: durationSecs });
    });
  }

  // End Roadways
  if (toggles.roadway && end) {
    ENDROADWAYS.forEach(([a, b, durationSecs]) => {
      if (sprinting) {
        g.addEdge(a, b, {
          type: "roadway",
          durationSecs: durationSecs,
        });
      } else {
        g.addEdge(a, b, {
          type: "roadway",
          durationSecs: durationSecs * 1.2,
        });
      }
    });
  }

  // Transfers
  TRANSFERS.forEach(([a, b, durationSecs]) => {
    g.addEdge(a, b, { type: "transfer", durationSecs: durationSecs });
  });

  return g;
}
