import 'core-js/fn/object/assign';
import 'core-js/fn/promise';
import 'core-js/es6/map';
import 'core-js/es6/set';
import { createElement } from 'react';
import { render } from 'react-dom';
import ReactHtmlConnector from 'react-html-connector';

import App from './App';


const reactConnection = new ReactHtmlConnector(createElement, render);
const query = {
  municipality: 'string',
};

reactConnection.connect(App, 'waste-removal-widget', query);
