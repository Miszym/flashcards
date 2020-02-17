import React from 'react';
import Navbar from './layout/Navbar';
import Main from './pages/Main';
import AddCard from './pages/AddCard';
import PracticeContainer from './partial/PracticeContainer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import store from '../redux';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
   colorSand: '#fbe8a6',
   colorPeach: '#f4976c',
   colorLake: '#303c6c',
   colorIceDark: '#b4dfe5',
   colorIceLight: '#d2fdff',
   palette: {
      primary: {
         main: '#303c6c'
      },
      secondary: {
         main: '#fbe8a6'
      },
      success: {
         main: '#4caf50'
      },
      error: {
         main: '#f44336'
      }
   }
});

function App() {
   return (
      <Provider store={store}>
         <Router>
            <CssBaseline>
               <MuiThemeProvider theme={theme}>
                  <Navbar />
                  <Route exact path="/">
                     <Main />
                  </Route>
                  <Route path="/practice">
                     <PracticeContainer />
                  </Route>
                  <Route exact path="/addCard">
                     <AddCard />
                  </Route>
               </MuiThemeProvider>
            </CssBaseline>
         </Router>
      </Provider>
   );
}

export default App;
