import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  AppBar, Toolbar, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>         
          <Typography variant="h6" className={classes.title}>
            <h1>Article Feeds Demo</h1>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
