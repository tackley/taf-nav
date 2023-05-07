export const SETTLEMENTS = { // test set only
  "ART Museum": 1,
  "Dolphin Isle": 2,
  "Duckville": 3,
  "EnderCamp": 4,
  "Entrance Platform": 5,
  "Expedition Mountain": 6,
  "G": 7,
  "Laetian Cape": 8,
  "Laetian Shallows": 9,
  "Laetiaville Central": 10,
  "Laetiaville Southside": 11,
  "Meadow Hill": 12,
  "Mushroom Island Central": 13,
  "Mushroom Island Portal": 14,
  "Nether Fortress": 15,
  "Nether Laetiaville": 16,
  "North Mushroom Island": 17,
  "Ocean Monument": 18,
  "Peppermint Isles": 19,
  "Pillager Mountain": 20,
  "Return Portal": 21,
  "Snowtop Village": 22,
  "Soul Sand Valley": 23,
  "South-East Camp": 24,
  "South-East Camp Portal": 25,
  "Spawn": 26,
  "Taiga Track": 27,
  "Upbourne": 28,
  "Upper Laetiaville": 29,
  "West Village": 30,
  "West Village Portal (Nether Plaza)": 31,
  "Western South-West Village": 32,
  "Western South-West Village Portal": 33,
  "Wolfbury": 34
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
]; //["", "", ], (to copy)

export const OVERBOATWAYS: Connection[] = [
  ["Dolphin Isle", "Duckville", 186.1],
  ["Dolphin Isle", "Laetian Cape", 122.8],
  ["Dolphin Isle", "Mushroom Island Central", 66.6],
  ["Dolphin Isle", "Peppermint Isles", 43.2],
  ["Dolphin Isle", "South-East Camp", 114.9],
  ["Dolphin Isle", "Spawn", 108.7],
  ["Duckville", "Dolphin Isle", 186.1],
  ["Duckville", "Laetian Cape", 145.5],
  ["Duckville", "Laetiaville Central", 310.4],
  ["Duckville", "Mushroom Island Central", 252.1],
  ["Laetian Cape", "Dolphin Isle", 122.8],
  ["Laetian Cape", "Duckville", 145.5],
  ["Laetian Cape", "Laetian Shallows", 20.9],
  ["Laetian Cape", "Laetiaville Central", 148.6],
  ["Laetian Cape", "Laetiaville Southside", 135.8],
  ["Laetian Cape", "Mushroom Island Central", 175.8],
  ["Laetian Cape", "South-East Camp", 154.8],
  ["Laetian Cape", "Spawn", 187.2],
  ["Laetian Shallows", "Laetian Cape", 20.9],
  ["Laetian Shallows", "Peppermint Isles", 60.0],
  ["Laetiaville Central", "Duckville", 310.4],
  ["Laetiaville Central", "Laetian Cape", 148.6],
  ["Laetiaville Central", "Laetiaville Southside", 26.7],
  ["Laetiaville Central", "Wolfbury", 56.1],
  ["Laetiaville Southside", "Laetian Cape", 135.8],
  ["Laetiaville Southside", "Laetiaville Central", 26.7],
  ["Mushroom Island Central", "Dolphin Isle", 66.6],
  ["Mushroom Island Central", "Duckville", 252.1],
  ["Mushroom Island Central", "Laetian Cape", 175.8],
  ["Mushroom Island Central", "South-East Camp", 110.6],
  ["Mushroom Island Central", "Spawn", 71.2],
  ["Mushroom Island Central", "West Village", 115.3],
  ["Peppermint Isles", "Dolphin Isle", 43.2],
  ["Peppermint Isles", "Laetian Shallows", 60.0],
  ["South-East Camp", "Dolphin Isle", 114.9],
  ["South-East Camp", "Laetian Cape", 154.8],
  ["South-East Camp", "Mushroom Island Central", 110.6],
  ["South-East Camp", "Spawn", 67.0],
  ["Spawn", "Dolphin Isle", 108.7],
  ["Spawn", "Laetian Cape", 187.2],
  ["Spawn", "Mushroom Island Central", 71.2],
  ["Spawn", "South-East Camp", 67.0],
  ["Spawn", "West Village", 148.5],
  ["West Village", "Mushroom Island Central", 115.3],
  ["West Village", "Spawn", 148.5],
  ["Wolfbury", "Laetiaville Central", 56.1]
];

export const OVERRAILWAYS: Connection[] = [
  ["ART Museum", "Mushroom Island Central", 106.3],
  ["ART Museum", "West Village", 32.6],
  ["Dolphin Isle", "Laetiaville Central", 239.6],
  ["Dolphin Isle", "Mushroom Island Central", 59.8],
  ["Dolphin Isle", "North Mushroom Island", 51.0],
  ["Dolphin Isle", "Peppermint Isles", 55.6],
  ["Expedition Mountain", "Laetian Cape", 234.2],
  ["Expedition Mountain", "Pillager Mountain", 60.3],
  ["Expedition Mountain", "South-East Camp", 27.3],
  ["Laetian Cape", "Expedition Mountain", 234.2],
  ["Laetian Cape", "Laetian Shallows", 31.2],
  ["Laetian Cape", "Meadow Hill", 73.8],
  ["Laetian Shallows", "Laetian Cape", 31.2],
  ["Laetian Shallows", "Laetiaville Central", 129.4],
  ["Laetian Shallows", "Mushroom Island Central", 170.0],
  ["Laetian Shallows", "Peppermint Isles", 66.5],
  ["Laetiaville Central", "Laetiaville Southside", 21.5],
  ["Laetiaville Central", "Meadow Hill", 26.0],
  ["Laetiaville Central", "Mushroom Island Central", 298.5],
  ["Laetiaville Central", "Taiga Track", 44.3],
  ["Laetiaville Central", "Upper Laetiaville", 14.2],
  ["Laetiaville Central", "Wolfbury", 59.5],
  ["Laetiaville Southside", "Laetiaville Central", 22.7],
  ["Laetiaville Southside", "Upper Laetiaville", 22.3],
  ["Meadow Hill", "Laetian Cape", 73.8],
  ["Meadow Hill", "Laetiaville Central", 26.9],
  ["Meadow Hill", "Mushroom Island Central", 270.0],
  ["Mushroom Island Central", "ART Museum", 96.1],
  ["Mushroom Island Central", "Laetiaville Central", 299.4],
  ["Mushroom Island Central", "North Mushroom Island", 14.2],
  ["Mushroom Island Central", "Ocean Monument", 37.6],
  ["Mushroom Island Central", "Spawn", 70.5],
  ["North Mushroom Island", "Dolphin Isle",51.0],
  ["North Mushroom Island", "Mushroom Island Central", 14.2],
  ["Ocean Monument", "Mushroom Island Central", 37.6],
  ["Peppermint Isles", "Dolphin Isle", 55.6],
  ["Peppermint Isles", "Laetian Shallows", 66.5],
  ["Peppermint Isles", "Laetiaville Central", 196.4],
  ["Peppermint Isles", "Mushroom Island Central", 103.0],
  ["Pillager Mountain", "Expedition Mountain", 57.9],
  ["South-East Camp", "Expedition Mountain", 27.3],
  ["South-East Camp", "Spawn", 69.2],
  ["Spawn", "Mushroom Island Central", 69.5],
  ["Spawn", "South-East Camp", 63.1],
  ["Taiga Track", "Laetiaville Central", 38.4],
  ["Taiga Track", "Upper Laetiaville", 30.3],
  ["Taiga Track", "Wolfbury", 18.4],
  ["Upper Laetiaville", "Laetiaville Central", 20.0],
  ["Upper Laetiaville", "Laetiaville Southside", 23.7],
  ["Upper Laetiaville", "Taiga Track", 30.3],
  ["Upper Laetiaville", "Wolfbury", 42.3],
  ["West Village", "ART Museum", 35.6],
  ["Wolfbury", "Laetiaville Central", 53.9],
  ["Wolfbury", "Taiga Track", 18.5]
];

export const OVERROADWAYS: Connection[] = [
  ["ART Museum", "G", 104.9],
  ["ART Museum", "West Village", 66.8],
  ["Duckville", "Laetiaville Central", 204.8],
  ["Duckville", "Taiga Track", 249.8],
  ["Expedition Mountain", "South-East Camp", 28.5],
  ["G", "ART Museum", 104.9],
  ["G", "West Village", 76.5],
  ["Laetian Cape", "Laetiaville Southside", 185.2],
  ["Laetian Cape", "Meadow Hill", 175.0],
  ["Laetian Cape", "Snowtop Village", 336.3],
  ["Laetiaville Central", "Duckville", 199.4],
  ["Laetiaville Central", "Upper Laetiaville", 9.5],
  ["Laetiaville Central", "Laetiaville Southside", 19.6],
  ["Laetiaville Southside", "Laetian Cape", 185.2],
  ["Laetiaville Southside", "Laetiaville Central", 25.3],
  ["Laetiaville Southside", "Meadow Hill", 29.5],
  ["Laetiaville Southside", "Snowtop Village", 155.4],
  ["Meadow Hill", "Laetian Cape", 175.0],
  ["Meadow Hill", "Laetiaville Southside", 31.2],
  ["Meadow Hill", "Snowtop Village", 182.2],
  ["Mushroom Island Central", "North Mushroom Island", 20.6],
  ["North Mushroom Island", "Mushroom Island Central", 20.6],
  ["Snowtop Village", "Laetian Cape", 335.0],
  ["Snowtop Village", "Laetiaville Southside", 154.1],
  ["Snowtop Village", "Meadow Hill", 181.0],
  ["South-East Camp", "Expedition Mountain", 29.3],
  ["South-East Camp", "Spawn", 62.6],
  ["Spawn", "South-East Camp", 64.2],
  ["Taiga Track", "Duckville", 245.2],
  ["Taiga Track", "Upper Laetiaville", 38.6],
  ["Taiga Track", "Wolfbury", 24.1],
  ["Upbourne", "Wolfbury", 85.7],
  ["Upper Laetiaville", "Laetiaville Central", 7.7],
  ["Upper Laetiaville", "Taiga Track", 30.3],
  ["West Village", "ART Museum", 66.8],
  ["West Village", "G", 76.5],
  ["Wolfbury", "Taiga Track", 24.1],
  ["Wolfbury", "Upbourne", 82.2]
];

export const NETHERBOATWAYS: Connection[] = [

];

export const NETHERRAILWAYS: Connection[] = [
  ["Mushroom Island Portal", "Nether Laetiaville", 42.3],
  ["Mushroom Island Portal", "South-East Camp Portal", 18.4],
  ["Mushroom Island Portal", "West Village Portal (Nether Plaza)", 17.6],
  ["Mushroom Island Portal", "Western South-West Village Portal", 42.4],
  ["Nether Fortress", "West Village Portal (Nether Plaza)", 18.8],
  ["Nether Laetiaville", "Mushroom Island Portal", 42.3],
  ["South-East Camp Portal", "Mushroom Island Portal", 17.5],
  ["West Village Portal (Nether Plaza)", "Mushroom Island Portal", 17.6],
  ["West Village Portal (Nether Plaza)", "Nether Fortress", 18.8],
  ["Western South-West Village Portal", "Mushroom Island Portal", 41.9]
];

export const NETHERROADWAYS: Connection[] = [
  ["Mushroom Island Portal", "Nether Laetiaville", 51.2],
  ["Mushroom Island Portal", "Soul Sand Valley", 53.7],
  ["Mushroom Island Portal", "South-East Camp Portal", 25.3],
  ["Mushroom Island Portal", "West Village Portal (Nether Plaza)", 19.2],
  ["Nether Fortress", "West Village Portal (Nether Plaza)", 22.6],
  ["Nether Laetiaville", "Mushroom Island Portal", 51.2],
  ["Nether Laetiaville", "Soul Sand Valley", 39.7],
  ["Nether Laetiaville", "South-East Camp Portal", 50.6],
  ["Soul Sand Valley", "Mushroom Island Portal", 53.7],
  ["Soul Sand Valley", "Nether Laetiaville", 39.7],
  ["Soul Sand Valley", "South-East Camp Portal", 51.9],
  ["South-East Camp Portal", "Mushroom Island Portal", 25.3],
  ["South-East Camp Portal", "Nether Laetiaville", 50.6],
  ["South-East Camp Portal", "Soul Sand Valley", 51.9],
  ["West Village Portal (Nether Plaza)", "Mushroom Island Portal", 19.2],
  ["West Village Portal (Nether Plaza)", "Nether Fortress", 22.6],
  ["West Village Portal (Nether Plaza)", "Western South-West Village Portal", 34.9],
  ["Western South-West Village Portal", "West Village Portal (Nether Plaza)", 34.9]
];

export const ENDBOATWAYS: Connection[] = [

];

export const ENDRAILWAYS: Connection[] = [

];

export const ENDROADWAYS: Connection[] = [
  ["EnderCamp", "Entrance Platform", 32.9],
  ["EnderCamp", "Return Portal", 33.9],
  ["Entrance Platform", "EnderCamp", 38.9],
  ["Entrance Platform", "Return Portal", 17.4],
  ["Return Portal", "EnderCamp", 39.9],
  ["Return Portal", "Entrance Platform", 17.4],
];

export const TRANSFERS: Connection[] = [
  ["Mushroom Island Central", "Mushroom Island Portal", 5.0],
  ["Mushroom Island Portal", "Mushroom Island Central", 5.0],
  ["Nether Laetiaville", "Upper Laetiaville", 5.0],
  ["South-East Camp", "South-East Camp Portal", 5.0],
  ["South-East Camp Portal", "South-East Camp", 5.0],
  ["Return Portal", "Spawn", 3.0],
  ["Upper Laetiaville", "Nether Laetiaville", 5.0],
  ["West Village", "West Village Portal (Nether Plaza)", 5.0],
  ["West Village Portal (Nether Plaza)", "West Village", 5.0],
  ["Western South-West Village", "Entrance Platform", 3.0],
  ["Western South-West Village", "Western South-West Village Portal", 5.0],
  ["Western South-West Village Portal", "Western South-West Village", 5.0],
];
