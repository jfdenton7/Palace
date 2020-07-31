import React from 'react';
import { Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { purple } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: purple[500],
    },
    secondary: deepPurple,
  },  
});

const useStyles = makeStyles((theme) => ({
  buttons: {
    padding: 30,
    textDecoration: 'none'
  },
  outer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%'
  },
  choices: {
  },
  title: {
    fontFamily: '"Courier New", Courier, monospace',
    textAlign: 'center'
  }

}));


function App() {

  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className={classes.title}>
      <h1>&#60;HOME&#47;&#62;</h1>
    </div>
      

    
    <Router>      
    <div className={classes.outer}>
      <div className={classes.choices}>
      <Link to='/create' className={classes.buttons}>
        <Button color='primary' variant='contained'>
        Add information
        </Button>
      </Link>

      <Link to='/learn' className={classes.buttons}>
        <Button color='primary' variant='contained'>
        Learn information
        </Button>
      </Link>

      <Link to='/todo' className={classes.buttons}>
        <Button color='primary' variant='contained'>
        ToDo List
        </Button>
      </Link>
           
      <Link to='/journal' className={classes.buttons}>
        <Button color='primary' variant='contained'>
        Journal
        </Button>
      </Link>

      <Link to='/finances' className={classes.buttons}>
        <Button color='primary' variant='contained'>
        Finances
        </Button>
      </Link>
      </div>   
      </div> 

      <Switch>

        <Route path='/create'>                  
         <h4>TODO create</h4>
        </Route>

        <Route path='/learn'>
          <h4>TODO learn</h4>          
        </Route>

        <Route path='/todo'>
          <h4>TODO todo</h4>          
        </Route>

        
        <Route path='/journal'>
          <h4>TODO journal</h4>          
        </Route>

        <Route path='/finances'>
          <h4>TODO finances</h4>          
        </Route>

      </Switch>
    </Router>    
    </ThemeProvider>
  );
}

export default App;
