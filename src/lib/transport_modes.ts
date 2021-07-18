import { EdgeAttributes } from "../graph";

export type TransportType = EdgeAttributes["type"];

export function transportMode(m: TransportType): string {
  switch (m) {
    case "railway":
      return "in minecart";
    case "roadway:sprint":
      return "sprinting";
    case "roadway:walk":
      return "walking";
    case "waterway":
      return "boating";
  }
}
