export const SETTLEMENTS = {
  "N.W. Plains Village": 1,
  "Venice mini": 2,
  Crossloop: 3,
  "Abandoned Savanna Village": 4,
  Gwendolyn: 5,
  "Plains Village": 6,
  "Forest Town": 7,
  "Alte City/Forest Town Docks": 8,
  "Alte City South/Interchange": 9,
  "Artificial Island": 10,
  "Dragon Isle": 11,
  "1.17 Mine": 12,
  "Deep S.W. Savanna Village": 13,
  "Gwendolyn West": 14,
  "Alte City North": 15,
};

export const WAYPOINTS = {
  "1.17 Mine Port": 16,
  "Interim Sea": 17,
  "Loop-River Canal (S)": 18,
  "North Desert Loop": 19,
  "West Crossloop Canal": 20,
  "East Crossloop Canal": 21,
  "Road Centre East": 22,
  "Road Centre West": 23,
  "Road Centre far West": 24,
};

export type SettlementName = keyof typeof SETTLEMENTS;
export type WaypointName = keyof typeof WAYPOINTS;
export type PlaceName = SettlementName | WaypointName;

type Connection = [PlaceName, PlaceName, number /*secs*/];

export const RAILWAYS: Connection[] = [
  ["Gwendolyn", "Forest Town", 32],
  ["Gwendolyn", "Deep S.W. Savanna Village", 149],
  ["Plains Village", "Forest Town", 17],
  ["Forest Town", "Alte City South/Interchange", 11],
  ["Forest Town", "Deep S.W. Savanna Village", 159],
];
//["", "", ], (to copy)

export const WATERWAYS: Connection[] = [
  ["Interim Sea", "Alte City/Forest Town Docks", 14.48],
  ["Interim Sea", "Artificial Island", 46.9],
  ["Dragon Isle", "Artificial Island", 14.74],
  ["Dragon Isle", "1.17 Mine Port", 39.67],
  ["Interim Sea", "Loop-River Canal (S)", 46.96],
  ["Interim Sea", "Loop-River Canal (S)", 55.26],
  ["Loop-River Canal (S)", "N.W. Plains Village", 34.14],
  ["N.W. Plains Village", "North Desert Loop", 21.29],
  ["N.W. Plains Village", "North Desert Loop", 42.61],
  ["North Desert Loop", "West Crossloop Canal", 223.17],
  ["West Crossloop Canal", "East Crossloop Canal", 55.87],
  ["East Crossloop Canal", "Loop-River Canal (S)", 18.96],
  ["East Crossloop Canal", "Crossloop", 1.96],
  ["Crossloop", "Abandoned Savanna Village", 27.84],
  ["Abandoned Savanna Village", "Gwendolyn West", 24.73],
  ["Gwendolyn West", "Gwendolyn", 5.6],
  ["West Crossloop Canal", "Venice mini", 23.93],
  ["Venice mini", "Deep S.W. Savanna Village", 69.6],
];

type RoadConnection = [
  PlaceName,
  PlaceName,
  number /*walk secs*/,
  number /* sprint secs */
];

export const ROADWAYS: RoadConnection[] = [
  ["Alte City South/Interchange", "Road Centre East", 7.98, 8.0],
  ["Road Centre East", "Road Centre West", 32.19, 23.3],
  ["Road Centre West", "Plains Village", 10.07, 8.19],
  ["Road Centre West", "Road Centre far West", 17.88, 13.35],
  ["Road Centre East", "Alte City/Forest Town Docks", 0.46, 0.49],
  ["Alte City/Forest Town Docks", "Forest Town", 24.99, 19.11],
  ["Forest Town", "Plains Village", 44.51, 34.39],
  ["1.17 Mine", "1.17 Mine Port", 52.95, 39.65],
  ["Road Centre far West", "Crossloop", 66.87, 49.26],
  ["Road Centre far West", "Gwendolyn West", 23.53, 16.61],
  ["Gwendolyn West", "Gwendolyn", 24.89, 18.28],
  ["Alte City North", "Alte City South/Interchange", 22.17, 17.44],
];
