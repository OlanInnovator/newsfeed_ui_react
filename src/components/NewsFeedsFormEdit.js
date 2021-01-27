import React from "react";
import { TextField, withStyles, Button, Paper} from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/aNewsFeeds";
import { Label } from "@material-ui/icons";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFeedBackValues = {
    id: 0,
    islike: 0,
    comment:"",
    createdDate:"",
    userId:0,
    articleId:""
}

const initialArticleValue = {
	id: "0",
	title:"",
	body:"",
	imageUrl:"",
	createdDate:"",
    updatedDate:""
}

const newNewsFeed = {
    article : [initialArticleValue],
    feedbacks : [initialFeedBackValues]
}


const NewsFeedsFormEdit = ({ classes, ...props }) => {

       const {
           values,
           handleInputChange,
           getValueType
       } = useForm(newNewsFeed, props.userType)

       const valueType = getValueType(props.userType);
   
       const handleSubmit = e => {
           e.preventDefault()

        const onSuccess = () => {
               }
               if (props.editModeOn)
               {
                props.updateNewsFeeds(props.currentId, props.currentItemValue, onSuccess)
                window.location.reload();
            }
               else
               {
               props.updateNewsFeeds(props.currentId, values, onSuccess)
               window.location.reload();
               }
            
         
       }

    return (
    <Paper elevation={3} width="minWidth" label="Add new Article" >
    <Label>{props.uType === 'publisher' ? "Edit Article" : "Add a Comment"}</Label>
    <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>  
    { props.uType === 'publisher' ? (
      <div>
        <TextField
        id={"title" + new Date().toLocaleTimeString()} 
        name="title"
        placeholder="Placeholder"
        defaultValue= {''}
        onChange={(e) => {handleInputChange(e, valueType, props);}} 
        hidden={true}
        />
      
        </div>
        ) : (<div></div>)}

        <TextField
        id={"article" + new Date().toLocaleTimeString()} 
        name="body"         
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        defaultValue= {''}
        onChange={(e) => {handleInputChange(e, valueType, props);}} />
        <Button variant="contained" color="primary" type="submit" className={classes.smMargin}>Submit</Button>
      </form>
      </Paper>
    );
} 

const mapStateToProps = state => ({
    aNewsFeedsList: state.aNewsFeeds.list
})

const mapActionToProps = {
    createNewsFeeds: actions.create,
    updateNewsFeeds: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(NewsFeedsFormEdit));