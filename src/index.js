import * as React from 'karet';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

import './assets/styles/global.css';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
