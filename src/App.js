import * as React from 'karet';
import * as U from 'karet.util';

import './app.css';

// import { getSchedule } from './api/schedule/index';

import * as H from './shared/helpers';
import Clock from './components/widgets/clock';

// const client = getClient({ username: 'piparkaq' });

const App = ({ aspectRatio }) =>
  <section className={U.cns('app-block', H.getAspectRatio(aspectRatio))}>
    <section className="safe">
      <Clock />
    </section>
  </section>;

export default App;
