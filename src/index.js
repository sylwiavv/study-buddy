import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Root from 'views/Root';
import { worker } from './mockss/browser';

// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./mockss/browser");
//   worker.start();
// }
worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
});
