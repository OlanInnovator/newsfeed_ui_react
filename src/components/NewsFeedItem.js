import React, { useState } from "react";
import clsx from 'clsx';
import { Accordion, AccordionDetails, AccordionSummary, AccordionActions, Typography, Divider, makeStyles, Checkbox, FormControlLabel, Hidden} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Favorite, FavoriteBorder} from "@material-ui/icons"
import NewsFeedsFormEdit from "./NewsFeedsFormEdit";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

  const NewsFieldItem = ({item, ...props}) => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState('')
  const [isEmployee, setIsEmployee] = useState('')
  const [currentItemValues, setCurrentItemValues] = useState('')
  const [editModeOn, setCurrentMode] = useState('')
  const onClick = () => {setIsEmployee(props.userType); 
    setCurrentId(item.article.id); 
    setCurrentItemValues(item);
    setCurrentMode(props.userType === "publisher");
  }
  
  
  return (
    <div className={classes.root} key={item.article.id}>
      <Accordion aria-expanded="false">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          onClick={onClick}
        >          
        <Hidden>{item.article.id}</Hidden>
          <div className={classes.column}>
            <Typography className={classes.heading}>{item.article.updatedDate}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{item.article.title}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
          {item.article.body}            
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
            <FormControlLabel 
        control={<Checkbox icon={<FavoriteBorder />}  
                  checkedIcon={<Favorite />} 
          name="checkedH" />} 
        label={item.feedBacks.length +"Like"}
      /> 
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <div>
            <NewsFeedsFormEdit editModeOn={editModeOn} setCurrentMode={setCurrentMode} currentItemValue={currentItemValues} isEmployee={isEmployee} currentId={currentId} setCurrentId={setCurrentId}  uType={props}  />          
          </div>
        </AccordionActions>
      </Accordion>      
</div>
  );
}
export default NewsFieldItem 
