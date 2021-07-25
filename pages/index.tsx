import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { CityList } from "../src/components/CityList";
import { DisplayRoute } from "../src/components/DisplayRoute";
import { Toggles, ToggleSwitches } from "../src/components/Toggles";
import { TransportType } from "../src/lib/transport_modes";
import Image from "next/image";
import MapImage from "../src/assets/map.png";

const ContentBox: React.FC<{ title: string }> = (props) => {
  return (
    <Paper>
      <Box padding={2}>
        <Typography variant="h5">{props.title}</Typography>
        {props.children}
      </Box>
    </Paper>
  );
};

const defaultSwitchState: ToggleSwitches = {
  "roadway:sprint": true,
  "roadway:walk": true,
  railway: true,
  waterway: true,
};

const useStyles = makeStyles((theme) => ({
  bkg: {
    position: "absolute",
    zIndex: -5,
    opacity: 0.5,
  },
}));

export default function Home() {
  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);
  const [switches, setSwitches] = useState<ToggleSwitches>(defaultSwitchState);

  const toggleSwitch = (t: TransportType) => {
    setSwitches((s) => ({
      ...s,
      [t]: !s[t],
    }));
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.bkg}>
        <Image src={MapImage} alt="background map" />
      </div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            The TaF Nav
          </Typography>
          <Typography variant="h6" style={{ color: "blue" }}>
            Visit Bistrogg
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs>
              <ContentBox title="From">
                <CityList selected={from} onSelectionChange={setFrom} />
              </ContentBox>
            </Grid>
            <Grid item xs>
              <ContentBox title="To">
                <CityList selected={to} onSelectionChange={setTo} />
              </ContentBox>
            </Grid>
            <Grid item xs={5}>
              <ContentBox title="Route">
                <Toggles switches={switches} toggle={toggleSwitch} />
                <DisplayRoute from={from} to={to} toggles={switches} />
              </ContentBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
