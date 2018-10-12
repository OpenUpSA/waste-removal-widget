import { createElement } from 'react';
import { render } from 'react-dom';
import ReactHtmlConnector from 'react-html-connector';

import App from './App';
import * as serviceWorker from './serviceWorker';

const reactConnection = new ReactHtmlConnector(createElement, render);
const query = {
  municipality: 'string',
};

reactConnection.connect(App, 'waste-removal-widget', query);