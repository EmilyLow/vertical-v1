import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {ListItemText, makeStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowIcon from '@material-ui/icons/ArrowRight'


import rockClimbing from "./rock_climbing.jpeg";

const useStyles = makeStyles((theme) => ({
    holdingContainer: {
        marginTop: 30
    },
    imageStyle: {
    //   flexGrow: 1,
     width: '100%',
     height: 'auto',
     //! This is cheating
    //  maxHeight: '400px'
    //  alignItems: "center"
    },
    cardStyle: {
        padding: theme.spacing(2)
    }
}));

function TopPanel() {
    const classes = useStyles();

    return(
    <Grid container direction="row" spacing={3} className={classes.holdingContainer}>
        
        <Grid item xs={8}>
                <img src={rockClimbing} className={classes.imageStyle}/>
        </Grid>
        <Grid item container spacing={3} direction="column" xs={4}>
           <Grid item>
                <Card className={classes.cardStyle}>
                    <Typography variant="h5">The Heights We Reach</Typography>
                    <Typography variant="caption">Jonathan Stiller</Typography>
                </Card>
           </Grid>
           <Grid item>
           <Card className={classes.cardStyle}>
                <Typography variant="h6">Today's Stories:</Typography>
                <List dense>
                <ListItem>
                    <ListItemIcon>
                        <ArrowIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="The Safest Safety-Harness"/>
                    </ListItem>
                    {/* <ListItem>
                        <ListItemIcon>
                            <ArrowIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary="Ice Is Your Friend"/>
                    </ListItem> */}
                    <ListItem>
                    <ListItemIcon>
                        <ArrowIcon />
                    </ListItemIcon>
                        <ListItemText
                        primary="The Child who Climbed Mt. Suva"/>
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                        <ArrowIcon />
                    </ListItemIcon>
                        <ListItemText
                        primary="The World's Most Dangerous Climb"/>
                    </ListItem>
                </List>
            </Card>
           </Grid>
            
        </Grid>
    </Grid>);
}

export default TopPanel;