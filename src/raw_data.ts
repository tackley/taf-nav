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
  ["Laetiaville Central", "Laetiaville Southside", 15/*test time*/],
  ["Laetiaville Central", "Wolfbury", 30/*test time*/],
  ["Laetiaville Southside", "Laetiaville Central", 15/*test time*/],
  ["Wolfbury", "Laetiaville Central", 30/*test time*/]
];

export const OVERRAILWAYS: Connection[] = [
  ["Mushroom Island Central", "Laetiaville Central", 295/*test time*/],
  ["Laetiaville Central", "Mushroom Island Central", 298.5],
  ["Laetiaville Central", "Upper Laetiaville", 14.2],
  ["Laetiaville Central", "Laetiaville Southside", 21.5],
  ["Laetiaville Central", "Taiga Track", 30/*test time*/],
  ["Laetiaville Central", "Wolfbury", 40/*test time*/],
  ["Laetiaville Central", "Meadow Hill", 26.0],
  ["Upper Laetiaville", "Laetiaville Central", 20.0],
  ["Upper Laetiaville", "Laetiaville Southside", 23.7],
  ["Upper Laetiaville", "Taiga Track", 15/*test time*/],
  ["Upper Laetiaville", "Wolfbury", 25/*test time*/],
  ["Laetiaville Southside", "Laetiaville Central", 22.7],
  ["Laetiaville Southside", "Upper Laetiaville", 22.3],
  ["Taiga Track", "Laetiaville Central", 30/*test time*/],
  ["Taiga Track", "Upper Laetiaville", 15/*test time*/],
  ["Taiga Track", "Wolfbury", 12/*test time*/],
  ["Wolfbury", "Laetiaville Central", 45/*test time*/],
  ["Wolfbury", "Taiga Track", 12/*test time*/],
  ["Meadow Hill", "Mushroom Island Central", 270.0],
  ["Meadow Hill", "Laetiaville Central", 26.9],
  

];

export const OVERROADWAYS: Connection[] = [
  ["Laetiaville Central", "Upper Laetiaville", 12/*test time*/],
  ["Laetiaville Central", "Laetiaville Southside", 25/*test time*/],
  ["Upper Laetiaville", "Laetiaville Central", 10/*test time*/],
  ["Upper Laetiaville", "Taiga Track", 30/*test time*/],
  ["Laetiaville Southside", "Laetiaville Central", 25/*test time*/],
  ["Laetiaville Southside", "Meadow Hill", 15/*test time*/],
  ["Taiga Track", "Upper Laetiaville", 32/*test time*/],
  ["Taiga Track", "Wolfbury", 15/*test time*/],
  ["Wolfbury", "Taiga Track", 15/*test time*/],
  ["Meadow Hill", "Laetiaville Southside", 15/*test time*/],
];

export const NETHERBOATWAYS: Connection[] = [

];

export const NETHERRAILWAYS: Connection[] = [
  ["Mushroom Island's Portal", "Nether Laetiaville", 25/*test time*/],
  ["Nether Laetiaville", "Mushroom Island's Portal", 25/*test time*/],
];

export const NETHERROADWAYS: Connection[] = [
  ["Mushroom Island's Portal", "Nether Laetiaville", 35/*test time*/],
  ["Nether Laetiaville", "Mushroom Island's Portal", 35/*test time*/],

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
