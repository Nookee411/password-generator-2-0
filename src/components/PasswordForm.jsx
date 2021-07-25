/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TextField,
  IconButton,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  makeStyles,
} from '@material-ui/core';
import CopyToClipboard from 'react-copy-to-clipboard';
import RefreshIcon from '@material-ui/icons/Refresh';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {
  PasswordActions,
  PasswordSelectors,
} from '../store/slices/PasswordSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    '& .MuiSvgIcon-root': {
      color: theme.palette.icon.primary,
    },
  },
  form: {
    maxHeight: 100,
  },
}));

function PasswordForm() {
  const password = useSelector(PasswordSelectors.password);
  const dispatch = useDispatch();
  const [isHidden, setHidden] = useState(false);
  const classes = useStyles();

  const refreshButtonClick = (e) => {
    dispatch(PasswordActions.generatePassword());
  };

  const copyToClipboard = () => {
    console.log(1);
    return 0;
  };
  return (
    <div className={classes.root}>
      <TextField
        className={classes.form}
        label="Password"
        value={password}
        fullWidth
        type={isHidden ? 'password' : 'text'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="refresh-button"
                onClick={refreshButtonClick}
              >
                <RefreshIcon />
              </IconButton>
              <CopyToClipboard text={password}>
                <IconButton aria-label="copy-button" onClick={copyToClipboard}>
                  <FileCopyIcon />
                </IconButton>
              </CopyToClipboard>
            </InputAdornment>
          ),
        }}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Hide password"
        checked={isHidden}
        onChange={() => setHidden(!isHidden)}
      />
    </div>
  );
}

export default PasswordForm;
