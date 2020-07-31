import React from 'react';
import { Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { purple } from '@material-ui/core/colors';


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

}));


function App() {

  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
