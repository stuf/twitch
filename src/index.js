import * as React from 'karet';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

import * as L from 'partial.lenses';
import * as R from 'ramda';
import * as dateFns from 'date-fns';

import './assets/styles/global.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

Object.assign(window, { R, L, dateFns });

ReactDOM.render(<App aspectRatio="16:9" />, document.getElementById('root'));
registerServiceWorker();
