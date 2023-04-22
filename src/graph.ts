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
  type: "roadway:walk" | "roadway:sprint" | "railway" | "boatway" | "transfer";
  durationSecs: number;
}

export type RouteGraph = Graph<LocationAttributes, EdgeAttributes>;

export function buildGraph(toggles: ToggleSwitches): RouteGraph {
  const g = new Graph<LocationAttributes, EdgeAttributes>({
    type: "directed",
    multi: true,
  });

  // Places
  Object.entries(SETTLEMENTS).forEach(([k, v]) => {
    g.addNode(k, { legendIdx: v, type: "settlement" });
  });
 Object.entries(WAYPOINTS).forEach(([k, v]) => {
   g.addNode(k, { legendIdx: v, type: "waypoint" });
 });

  // Overworld Boatways
  if (toggles.boatway && toggles.overworld)  {
    OVERBOATWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "boatway", durationSecs: durationSecs });
    });
  }

  // Overworld Railways
  if (toggles.railway && toggles.overworld) {
    OVERRAILWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "railway", durationSecs: durationSecs });
    });
  }

  // Overworld Roadways
  if (toggles.roadway && toggles.overworld)  {
    OVERROADWAYS.forEach(([a, b, durationSecs]) => {
      if (toggles.sprinting) { 
        g.addEdge(a, b, {
          type: "roadway:sprint",
          durationSecs: durationSecs
        });
      }
      else {
        g.addEdge(a, b, {
          type: "roadway:walk",
          durationSecs: durationSecs*1.2
        });
      }
    });
  }

  // Nether Boatways
  if (toggles.boatway && toggles.nether) {
    NETHERBOATWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "boatway", durationSecs: durationSecs });
    });
  }

  // Nether Railways
  if (toggles.railway && toggles.nether) {
    NETHERRAILWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "railway", durationSecs: durationSecs });
    });
  }

  // Nether Roadways
  if (toggles.roadway && toggles.nether)  {
    NETHERROADWAYS.forEach(([a, b, durationSecs]) => {
      if (toggles.sprinting) { 
        g.addEdge(a, b, {
          type: "roadway:sprint",
          durationSecs: durationSecs
        });
      }
      else {
        g.addEdge(a, b, {
          type: "roadway:walk",
          durationSecs: durationSecs*1.2
        });
      }
    });
  }

  // End Boatways
  if (toggles.boatway && toggles.end) {
    ENDBOATWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "boatway", durationSecs: durationSecs });
    });
  }

  // End Railways
  if (toggles.railway && toggles.end) {
    ENDRAILWAYS.forEach(([a, b, durationSecs]) => {
      g.addEdge(a, b, { type: "railway", durationSecs: durationSecs });
    });
  }

  // End Roadways
  if (toggles.roadway && toggles.end)  {
    ENDROADWAYS.forEach(([a, b, durationSecs]) => {
      if (toggles.sprinting) { 
        g.addEdge(a, b, {
          type: "roadway:sprint",
          durationSecs: durationSecs
        });
      }
      else {
        g.addEdge(a, b, {
          type: "roadway:walk",
          durationSecs: durationSecs*1.2
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
