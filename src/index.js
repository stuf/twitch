import * as React from 'karet';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './assets/styles/global.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App aspectRatio="16:9" />, document.getElementById('root'));
registerServiceWorker();
