import { ToggleSwitch } from "../components/Toggles";
import { EdgeAttributes } from "../graph";

export type TransportType = EdgeAttributes["type"];

export function transportMode(m: TransportType): string {
  switch (m) {
    case "railway":
      return "in minecart";
    case "roadway":
      return "walking";
    case "boatway":
      return "boating";
    case "transfer":
      return "transfer";
  }
}
