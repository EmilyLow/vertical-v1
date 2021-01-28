
import Grid from "@material-ui/core/Grid";
import TopPanel from "./TopPanel";

function Content() {

    return(
    <Grid container direction="column">
        <Grid item container >
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={9}>
                <TopPanel/>
            </Grid>
            <Grid item xs={false} sm={2} /> 
        </Grid>

    </Grid>
    );
}

export default Content;