
import { AppBar, IconButton, Button, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import PersonIcon from "@material-ui/icons/Person"

const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
     justifyContent: 'space-between', 
    //  alignItems: "center"
        
    },
    menuButton: {
    //   marginRight: theme.spacing(2),
    },
    title: {
    //  flexGrow: 3,
    //  alignSelf: 'center'
    },
  }));

  //!!Figure out how to use theme here, and set buttons to contrast color of primary

function Header() {
    const classes = useStyles();
    return(
        
        <AppBar position="static" > 
            <Toolbar className={classes.root}>
                <IconButton color="secondary" className={classes.menuButton}>
                    <SearchIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>Vertical</Typography>
                <Button color="secondary" variant="outlined"  endIcon={<PersonIcon/>}>Sign In</Button>
            </Toolbar> 
        </AppBar>
    );
}


export default Header;