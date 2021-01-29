import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {ListItemText, makeStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



const useStyles = makeStyles((theme) => ({
    holdingContainer: {
        marginTop: 30,
        backgroundColor: "primary"
    },
    cardStyle: {
        padding: theme.spacing(2)
    }
}));

function TopPanel() {
    const classes = useStyles();

    return(
    <Grid container direction="row" className={classes.holdingContainer}>
        
        <Grid item>
            <Typography variant="h5">Our Top Climbs:</Typography>
        </Grid>
        <Grid item container  direction="row" >
       
           <Grid item>
           <Card className={classes.cardStyle} xs={12}>
                <List >
                <ListItem>
                    <ListItemText
                        primary="1. St. George's Alley"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                        primary="2. Horse Head Canyon"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                        primary="3. Ancient's Peak"/>
                    </ListItem>
                    <ListItem>
                    <ListItemText
                        primary="4. Mt. Forward"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                        primary="5. Jonathan's Bend"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                        primary="6. The Meeting Arch"/>
                    </ListItem>
                </List>
            </Card>
            <Card>
                <Typography>Test</Typography>
            </Card>
           </Grid>
            
        </Grid>
    </Grid>);
}

export default TopPanel;