import React, { useEffect } from "react";
import { TextField, withStyles, Button, Paper, Divider, FormLabel} from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/aNewsFeeds";

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
    comment:'',
    createdDate:new Date().toLocaleTimeString(),
    userId:0,
    articleId:''
}

const initialArticleValue = {
	title:'',
	body:'',
	imageUrl:'',
	createdDate: new Date().toLocaleTimeString(),
    updatedDate: new Date().toLocaleTimeString()
}

const newNewsFeed = {
    article : initialArticleValue,
    feedbacks : [initialFeedBackValues]
}

//const getValueType = (params) => (params === "publisher" ? "article" : "feedbacks");

const NewsFeedsForm = ({ classes, ...props }) => {
    const {
        values,
        setValues,
        handleInputChange,
        getValueType
    } = useForm(newNewsFeed, props.userType)

    const valueType = getValueType(props.userType);

       const handleSubmit = e => {           
        e.preventDefault()     
        const onSuccess = () => { this.location.reload();}
         console.log(values.values + " **End**  " + values.newNewsFeed);
        props.createNewsFeeds(values.newNewsFeed, onSuccess) 
        window.location.reload();
       }

       useEffect(() => {
            setValues({
                values,
                newNewsFeed
        })
    }, [])

    return (
        props.userType === "publisher" ?
      (
             
      <Paper elevation={3} width="minWidth" label="Add new Article" >
       <FormLabel><h2>{"Add New Article"}</h2></FormLabel> 
       <Divider />
      <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>        
        <TextField  id={"title" + new Date().toLocaleTimeString()} 
        name="title"
        placeholder="Placeholder"
        label="Topic / Title / Subject"
        defaultValue= {''}
        onChange={(e) => {handleInputChange(e, valueType, props);}} 
        />
        <Divider />

        <TextField rows="2"
        id={"article" + new Date().toLocaleTimeString()} 
        name="body"         
        label="Aritcle details"
        placeholder="Content"
        multiline
        onChange={(e) => {handleInputChange(e, valueType, props);}}
        defaultValue={""} />
        <Button variant="contained" color="primary" type="submit" className={classes.smMargin}>Submit</Button>
      </form>
      </Paper>
      )
      : (<div> <h1></h1></div>)
    );
} 

const mapStateToProps = state => ({
    aNewsFeedsList: state.aNewsFeeds.list
})

const mapActionToProps = {
    createNewsFeeds: actions.create,
    updateNewsFeeds: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(NewsFeedsForm));
