import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { PinDropSharp } from '@material-ui/icons';

export default function SwitchLabels(props) {
  
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={props.checked}
            onChange={props.clicked}
            name="checkedB"
            color="primary"
          />
        }
        label="Light Mode"
      />
    </FormGroup>
  );
}
