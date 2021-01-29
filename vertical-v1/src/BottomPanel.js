import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {ListItemText, makeStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



const useStyles = makeStyles((theme) => ({
    holdingContainer: {
        marginTop: 50,
        backgroundColor: "primary"
    },
    cardStyle: {
        padding: theme.spacing(2)
    },
    titleStyle: {
        marginBottom: 30
    }
}));

function TopPanel() {
    const classes = useStyles();

    return(
       
        <Grid container spacing={3} className={classes.holdingContainer}>
          <Grid item xs={12} className={classes.titleStyle}>
            <Typography variant="h4"> Our Top Climbs:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> <b>1.</b>  St. George's Alley</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> <b>2.</b>  Horse Head Canyon</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> <b>3.</b>  Ancient's Peak</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> <b>4.</b>  Mt. Forward</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> <b>5.</b>  Jonathan's Bend</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> <b>6.</b>  The Meeting Arch</Typography>
          </Grid>
        </Grid>
      );
}

export default TopPanel;