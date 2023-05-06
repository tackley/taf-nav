import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";

import React, { useState } from "react";
import { CityList } from "../src/components/CityList";
import { DisplayRoute } from "../src/components/DisplayRoute";
import { Toggles, ToggleSwitches } from "../src/components/Toggles";
import { TransportType } from "../src/lib/transport_modes";
import Image from "next/image";
import MapImage from "../src/assets/map.png";

/*
rgba(255, 255, 255, 0.08);
-webkit-backdrop-filter: blur(32px);
*/

const ContentBox: React.FC<{ title: string; children: React.ReactNode }> = (
  props
) => {
  return (
    <Paper
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Box padding={2}>
        <Typography variant="h5">{props.title}</Typography>
        {props.children}
      </Box>
    </Paper>
  );
};

const defaultSwitchState: ToggleSwitches = {
  roadway: true,
  railway: true,
  boatway: true,
  end: true,
  nether: true,
  overworld: true,
  sprinting: true,
};

export default function Home() {
  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);
  const [switches, setSwitches] = useState<ToggleSwitches>(defaultSwitchState);

  const toggleSwitch = (t: keyof ToggleSwitches) => {
    setSwitches((s) => ({
      ...s,
      [t]: !s[t],
    }));
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: -5,
          opacity: 0.5,
          height: "100vh",
          width: "100vw",
        }}
      >
        <Image
          fill
          src={MapImage}
          alt="background map"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.3),
          backdropFilter: "blur(8px)",
        }}
      >
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            AdNav
          </Typography>
          <Typography variant="h6" style={{ color: "blue" }}>
            Visit The Great Giant G
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
