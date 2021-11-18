import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import {firebaseConfig} from './firebase';
import './index.css';
import App from './App';

import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import {green,blueGrey,} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary:green,
    secondary:blueGrey
  },
});

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
    </FirebaseAppProvider>
    ,
  document.getElementById('root')
);

