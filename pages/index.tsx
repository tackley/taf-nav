import { Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { CityList } from "../src/components/CityList";
import { DisplayRoute } from "../src/components/DisplayRoute";

export default function Home() {
  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);

  return (
    <Container>
      <Typography variant="h2">TaF Nav</Typography>

      <Grid container spacing={3}>
        <Grid item xs>
          <Typography variant="h3">From</Typography>

          <CityList selected={from} onSelectionChange={setFrom}></CityList>
        </Grid>
        <Grid item xs>
          <Typography variant="h3">To</Typography>
          <CityList selected={to} onSelectionChange={setTo}></CityList>

        </Grid>
        <Grid item xs>
          <Typography variant="h3">Route</Typography>

          <DisplayRoute from={from} to={to} />
        </Grid>
      </Grid>
    </Container>
  );
}
