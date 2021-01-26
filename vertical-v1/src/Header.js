
import { AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


function Header() {

    return(
        <AppBar position="static"> 
            <Toolbar>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <Typography>Vertical</Typography>
            </Toolbar>
    
        </AppBar>
    );
}


export default Header;