import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {FormLabel, withStyles, Divider, TextField, MenuItem, InputLabel, FormHelperText, Select, FormControl, Paper } from '@material-ui/core';

const usertypes = [
    {
      value: 'null',
      label: '',
    },
    {
      value: 'employee',
      label: 'Employee',
    },
    {
      value: 'publisher',
      label: 'Publisher',
    },
  ];

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      border: '2px'
    },
    label: {
      fontSize: '20px',
    },
  },
}));

const UserLoginDetails = ({ userType, setUserType }) => {
const classes = useStyles();

return (
  <Paper elevation={3} width="minWidth" >  
    <FormLabel  classes={{ label: classes.label }}>{"User Profile"}</FormLabel>
    <Divider />  
    <FormControl className={classes.formControl}>     
    <TextField id="standard-basic" label="Username" helperText="Please enter your username" />
    </FormControl>

    <FormControl className={classes.formControl}>
    <InputLabel id="demo-simple-select-helper-label">User Type</InputLabel>
    <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={userType}
        onClick={(e) => {e.preventDefault()}}
        onChange={(e) => { setUserType(e.target.value);}}>
            {usertypes.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
            ))}
    </Select>
    <FormHelperText>Please identify your user type</FormHelperText>
    </FormControl>
    </Paper>  
  );
}

export default (withStyles(useStyles)(UserLoginDetails))