/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  makeStyles,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  PasswordSelectors,
  PasswordActions,
} from '../store/slices/PasswordSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1F1F1F',
    color: theme.palette.white.primary,
    border: '1px solid rgba(186, 186, 186, 0.4)',
    padding: theme.spacing(2),
    '&.Mui-expanded': {
      '& .MuiAccordionSummary-root': {
        color: theme.palette.white.tertiary,
      },
    },
    '&.MuiAccordion-rounded:last-child': {
      borderRadius: 12,
      marginTop: 0,
    },
    '& .MuiAccordionDetails-root': {
      display: 'flex',
      flexDirection: 'column',
    },
    '& .MuiFormControlLabel-label.Mui-disabled': {
      color: theme.palette.white.tertiary,
    },
  },
  icon: {
    color: theme.palette.accent.primary,
  },
}));

function PasswordOptions() {
  const classes = useStyles();
  const config = useSelector(PasswordSelectors.config);
  const dispatch = useDispatch();
  const [isDisabled, setDisabled] = useState(false);

  const getOptionsAvliability = () =>
    config.uppercase + config.lowercase + config.digits + config.signs <= 1;

  useEffect(() => {
    setDisabled(getOptionsAvliability);
  });

  const handleConfigChange = (settingName) => (e) => {
    dispatch(PasswordActions.tweakConfig(settingName));
  };

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.icon} />}
        aria-controls="panela-content"
        id="panel1a-header"
      >
        <Typography>Password options</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleConfigChange('uppercase')}
              checked={config.uppercase}
              disabled={isDisabled && config.uppercase}
            />
          }
          label="Uppercase"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={config.lowercase}
              onChange={handleConfigChange('lowercase')}
              disabled={isDisabled && config.lowercase}
            />
          }
          label="Lowercase"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={config.digits}
              onChange={handleConfigChange('digits')}
              disabled={isDisabled && config.lowercase}
            />
          }
          label="Digits"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={config.signs}
              onChange={handleConfigChange('signs')}
              disabled={isDisabled && config.signs}
            />
          }
          label="Signs"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={config.dual}
              onChange={handleConfigChange('dual')}
            />
          }
          label="Dualreadable"
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default PasswordOptions;
