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

export type ToggleSwitches = {
  // adds the switches
  boatway: boolean;
  railway: boolean;
  roadway: boolean;
  overworld: boolean;
  nether: boolean;
  end: boolean;

  sprinting: boolean; // if off do walking
};

export type ToggleSwitch = keyof ToggleSwitches;

function toggleLabel(t: ToggleSwitch): string {
  return `${t}`;
}

interface Props {
  switches: ToggleSwitches;
  toggle: (t: ToggleSwitch) => void;
}

export const Toggles: React.FC<Props> = ({ switches, toggle }) => {
  const Toggle: React.FC<{ t: ToggleSwitch }> = ({ t }) => (
    <FormControlLabel
      control={
        <Switch checked={switches[t]} onChange={() => toggle(t)} name={t} />
      }
      label={toggleLabel(t)}
    />
  );

  return (
    <FormControl component="fieldset">
      <FormGroup>
        {Object.keys(switches).map((t) => (
          <Toggle key={t} t={t as ToggleSwitch} />
        ))}
      </FormGroup>
    </FormControl>
  );
};
