
import { ToggleSwitches } from "../components/Toggles";
import { EdgeAttributes } from "../graph";

export type TransportType = EdgeAttributes["type"];

export function transportMode(m: TransportType,toggles:ToggleSwitches): string {
  switch (m) {
    case "railway":
      return "in minecart";
    case "roadway":
      return toggles.sprinting ? "sprinting" : "walking";
    case "boatway":
      return "boating";
    case "transfer":
      return "transfer";
  }
}
