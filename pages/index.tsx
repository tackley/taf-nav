import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { CityList } from "../src/components/CityList";
import { DisplayRoute } from "../src/components/DisplayRoute";

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

export default function Home() {
  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>The TaF Nav</Typography>
          <Typography variant="h6" style={{color: "blue"}} >Visit Bistrogg</Typography>
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
                <DisplayRoute from={from} to={to} />
              </ContentBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
