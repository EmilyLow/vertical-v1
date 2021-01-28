import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid'

import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <Grid container direction = "column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid item>
        <Content/>
      </Grid>
    </Grid>
  );
}

export default App;
