import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import _ from "lodash";
import React, { Fragment, useMemo } from "react";
import { findRoutes, findRoutesWithFilter } from "../custom_routing";
import { PlaceName } from "../raw_data";
import { LocationCity } from "@mui/icons-material";
import { EdgeAttributes } from "../graph";
import { transportMode } from "../lib/transport_modes";
import { ToggleSwitches } from "./Toggles";

interface Props {
  from: string | null;
  to: string | null;
  toggles: ToggleSwitches;
}

export const DisplayRoute = (props: Props) => {
  const { from, to, toggles } = props;

  const result = useMemo(() => {
    if (!from) return null;
    return findRoutesWithFilter(from as PlaceName, toggles);
  }, [from, toggles]);

  if (!from || !to || !result) {
    return <Typography>Please select from and to</Typography>;
  }

  const bestRoute = result.get(to);

  if (_.isNil(bestRoute) || !_.isFinite(bestRoute.totalDurationSecs)) {
    return <Typography>No route found</Typography>;
  }

  if (from === to) {
    return <Typography variant="h2">Stand still!</Typography>;
  }

  return (
    <>
      <Typography>
        The route from {from} to {to} will take{" "}
        {bestRoute.totalDurationSecs.toLocaleString(undefined, {
          maximumFractionDigits: 1,
        })}{" "}
        seconds.
      </Typography>

      <List>
        <ListItem key={-1}>
          <ListItemIcon>
            <LocationCity />
          </ListItemIcon>
          <ListItemText primary={from} secondary="starting location" />
        </ListItem>
        {bestRoute.route.map((r, idx) => (
          <Fragment key={idx}>
            <ListItem key={`${idx}-route`}>
              <ListItemText
                primary={`${r.durationSecs} seconds ${transportMode(
                  r.type
                )} to...`}
              />
            </ListItem>
            <ListItem key={`${idx}-loc`}>
              <ListItemIcon>
                <LocationCity />
              </ListItemIcon>
              <ListItemText primary={`${r.to}`} />
            </ListItem>
          </Fragment>
        ))}
      </List>
    </>
  );
};
