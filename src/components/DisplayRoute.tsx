import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import _ from "lodash";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { findFastestRoutes, findRoutes } from "../custom_routing";
import { PlaceName } from "../raw_data";
import { LocationCity } from "@material-ui/icons";

interface Props {
  from: string | null;
  to: string | null;
}

export const DisplayRoute = (props: Props) => {
  const { from, to } = props;

  const result = useMemo(() => {
    console.log("useMemo running");
    if (!from) return null;
    return findRoutes(from as PlaceName);
  }, [from]);

  if (!from || !to || !result) {
    return <Typography>Please select from and to</Typography>;
  }

  const bestRoute = result.get(to);

  if (_.isNil(bestRoute) || !_.isFinite(bestRoute.totalDurationSecs)) {
    return <Typography>No route found</Typography>;
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
          <>
            <ListItem key={`${idx}-route`}>
              <ListItemText
                primary={`${r.durationSecs} seconds using ${r.type} to`}
              />
            </ListItem>
            <ListItem key={`${idx}-loc`}>
              <ListItemIcon>
                <LocationCity />
              </ListItemIcon>
              <ListItemText primary={`${r.to}`} />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};
