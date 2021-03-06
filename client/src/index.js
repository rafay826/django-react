import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './assets/styles/styles.scss';
import { App } from './app/App';
import { appStore } from './app/store';

ReactDOM.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
