import React from 'react';
import Navbar from './layout/Navbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   colorSand: '#fbe8a6',
   colorPeach: '#f4976c',
   colorLake: '#303c6c',
   colorIceDark: '#b4dfe5',
   colorIceLight: '#d2fdff'
});

function App() {
   return (
      <>
         <MuiThemeProvider theme={theme}>
            <Navbar />
         </MuiThemeProvider>
      </>
   );
}

export default App;
