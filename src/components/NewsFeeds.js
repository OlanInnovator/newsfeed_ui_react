import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/aNewsFeeds";
import {withStyles, FormLabel} from "@material-ui/core";
import NewsFeedItem from "./NewsFeedItem";


const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    root1: {
        width: '100%',
    },
    
      formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})


const NewsFeeds = ({ ...props }) => {
    

    useEffect(() => {
        props.fetchAllNewsFeeds()
    }, [])
    
    const newFeedItem = () => {//

        const newsFeeds = props.aNewsFeedsList.sort((a, b) => (a.article.createdDate < b.article.createdDate) ? 1 : -1)

        switch(props.userType) {
  
          case "employee":   return (  
                                    <div className={styles.root}>
                                     <FormLabel><h2>{"Published News Articles Feeds"}</h2></FormLabel>
                                    {newsFeeds.map(feeds => (
                                    <NewsFeedItem userType={props.userType}  key={feeds.article.id}  item={feeds} /> ))}
                                    </div>
                                );
          case "publisher":    return (  
                                    <div className={styles.root}>
                                    <FormLabel><h2>{"Published News Articles Feeds"}</h2></FormLabel>
                                    {newsFeeds.map(feeds => (
                                    <NewsFeedItem userType={props.userType}  key={feeds.article.id}  item={feeds} /> ))}                                    
                                    </div>
                                );
  
          default: return (<div> <h1>User Type Unknown</h1> <br/>  </div>);
        }

      }
 
     return (<div>{newFeedItem()}</div>)
}

const mapStateToProps = state => ({
    aNewsFeedsList: state.aNewsFeeds.list
})

const mapActionToProps = {
    fetchAllNewsFeeds: actions.fetchAll,
    deleteNewsFeeds: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(NewsFeeds));