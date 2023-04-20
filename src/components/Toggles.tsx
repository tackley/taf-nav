import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import React from "react";
import { transportMode, TransportType } from "../lib/transport_modes";

export type ToggleSwitches = {
  [key in TransportType]: boolean;
};

interface Props {
  switches: ToggleSwitches;
  toggle: (t: TransportType) => void
}

export const Toggles: React.FC<Props> = ({ switches, toggle }) => {
  const Toggle: React.FC<{ t: TransportType }> = ({ t }) => (
    <FormControlLabel
      control={<Switch checked={switches[t]} onChange={() => toggle(t)} name={t} />}
      label={transportMode(t)}
    />
  );

  return (
    <FormControl component="fieldset">
      <FormGroup>
        {Object.keys(switches).map((t) => (
          <Toggle key={t} t={t as TransportType} />
        ))}
      </FormGroup>
    </FormControl>
  );
};
