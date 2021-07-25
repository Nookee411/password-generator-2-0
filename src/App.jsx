import { Container, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import './App.css';
import PasswordForm from './components/PasswordForm';
import PasswordOptions from './components/PasswordOptions';

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
    },
  },
  optins: {
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      margin: '0 auto',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        className={classes.header}
      >
        Password Generator
      </Typography>
      <PasswordForm />
      <div className={classes.optins}>
        <PasswordOptions />
      </div>
    </Container>
  );
}

export default App;
