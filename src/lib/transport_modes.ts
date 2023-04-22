import { ToggleSwitch } from "../components/Toggles";
import { EdgeAttributes } from "../graph";

export type TransportType = EdgeAttributes["type"];

export function transportMode(m: ToggleSwitch): string {
  return(m)
}
