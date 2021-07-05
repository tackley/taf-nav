import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import LocationCityIcon from "@material-ui/icons/LocationCity";

import { SETTLEMENTS } from "../raw_data";

interface Props {
  onSelectionChange: (selected: string | null) => void;
  selected: string | null;
}

export const CityList = (props: Props) => {
  return (
    <List>
      {Object.keys(SETTLEMENTS).map((s) => (
        <ListItem
          key={s}
          button
          selected={s === props.selected}
          onClick={(e) => props.onSelectionChange(s)}
        >
          <ListItemIcon>
            <LocationCityIcon />
          </ListItemIcon>
          <ListItemText primary={s} />
        </ListItem>
      ))}
    </List>
  );
};
