import React from 'react';
import Navbar from './layout/Navbar';
import Main from './pages/Main';
import AddCard from './pages/AddCard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const theme = createMuiTheme({
   colorSand: '#fbe8a6',
   colorPeach: '#f4976c',
   colorLake: '#303c6c',
   colorIceDark: '#b4dfe5',
   colorIceLight: '#d2fdff'
});

function App() {
   return (
      <Router>
         <MuiThemeProvider theme={theme}>
            <Navbar />
            <Route exact path="/">
               <Main />
            </Route>
            <Route exact path="/AddCard">
               <AddCard />
            </Route>
         </MuiThemeProvider>
      </Router>
   );
}

export default App;
