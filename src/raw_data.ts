export const SETTLEMENTS = { // test set only

  "Mushroom Island Central": 1,
  "Mushroom Island's Portal": 2,
  "Laetiaville Central": 3,
  "Upper Laetiaville": 4,
  "Laetiaville Southside": 5,
  "Nether Laetiaville": 6,
  "Taiga Track": 7,
  "Wolfbury": 8,
  "Meadow Hill": 9
};

export const WAYPOINTS: Record<string,number> = { // currently unused

};

export type SettlementName = keyof typeof SETTLEMENTS;
export type WaypointName = keyof typeof WAYPOINTS;
export type PlaceName = SettlementName | WaypointName;

type Connection = [
  PlaceName, // start location
  PlaceName, // end location
  number // time in seconds
]; //["", "", /*test time*/], (to copy)

export const OVERBOATWAYS: Connection[] = [
  ["Laetiaville Central", "Laetiaville Southside", 26.7],
  ["Laetiaville Central", "Wolfbury", 56.1],
  ["Laetiaville Southside", "Laetiaville Central", 26.7],
  ["Wolfbury", "Laetiaville Central", 56.1]
  
];

export const OVERRAILWAYS: Connection[] = [
  ["Mushroom Island Central", "Laetiaville Central", 299.4],
  ["Laetiaville Central", "Mushroom Island Central", 298.5],
  ["Laetiaville Central", "Upper Laetiaville", 14.2],
  ["Laetiaville Central", "Laetiaville Southside", 21.5],
  ["Laetiaville Central", "Taiga Track", 44.3],
  ["Laetiaville Central", "Wolfbury", 59.5],
  ["Laetiaville Central", "Meadow Hill", 26.0],
  ["Upper Laetiaville", "Laetiaville Central", 20.0],
  ["Upper Laetiaville", "Laetiaville Southside", 23.7],
  ["Upper Laetiaville", "Taiga Track", 30.3],
  ["Upper Laetiaville", "Wolfbury", 42.3],
  ["Laetiaville Southside", "Laetiaville Central", 22.7],
  ["Laetiaville Southside", "Upper Laetiaville", 22.3],
  ["Taiga Track", "Laetiaville Central", 38.4],
  ["Taiga Track", "Upper Laetiaville", 30.3],
  ["Taiga Track", "Wolfbury", 18.4],
  ["Wolfbury", "Laetiaville Central", 53.9],
  ["Wolfbury", "Taiga Track", 18.5],
  ["Meadow Hill", "Mushroom Island Central", 270.0],
  ["Meadow Hill", "Laetiaville Central", 26.9],
  
];

export const OVERROADWAYS: Connection[] = [
  ["Laetiaville Central", "Upper Laetiaville", 9.5],
  ["Laetiaville Central", "Laetiaville Southside", 19.6],
  ["Upper Laetiaville", "Laetiaville Central", 7.7],
  ["Upper Laetiaville", "Taiga Track", 30.3],
  ["Laetiaville Southside", "Laetiaville Central", 25.3],
  ["Laetiaville Southside", "Meadow Hill", 29.5],
  ["Taiga Track", "Upper Laetiaville", 38.6],
  ["Taiga Track", "Wolfbury", 24.1],
  ["Wolfbury", "Taiga Track", 24.1],
  ["Meadow Hill", "Laetiaville Southside", 31.2],
];

export const NETHERBOATWAYS: Connection[] = [

];

export const NETHERRAILWAYS: Connection[] = [
  ["Mushroom Island's Portal", "Nether Laetiaville", 42.3],
  ["Nether Laetiaville", "Mushroom Island's Portal", 42.3],

];

export const NETHERROADWAYS: Connection[] = [
  ["Mushroom Island's Portal", "Nether Laetiaville", 51.2],
  ["Nether Laetiaville", "Mushroom Island's Portal", 51.2],

];

export const ENDBOATWAYS: Connection[] = [

];

export const ENDRAILWAYS: Connection[] = [

];

export const ENDROADWAYS: Connection[] = [

];

export const TRANSFERS: Connection[] = [
  ["Mushroom Island Central", "Mushroom Island's Portal", 5],
  ["Mushroom Island's Portal", "Mushroom Island Central", 5],
  ["Upper Laetiaville", "Nether Laetiaville", 5],
  ["Nether Laetiaville", "Upper Laetiaville", 5],
];
