import * as React from 'karet';
import * as t from 'tcomb';
import * as U from 'karet.util';
import * as R from 'ramda';
import * as L from 'partial.lenses';

import './app.css';

// import { getSchedule } from './api/schedule/index';

import * as H from './shared/helpers';
import Block from './components/ui/block';
import Clock from './components/widgets/clock';
import Ticker from './components/widgets/ticker';

import * as constants from './constants';
import * as effects from './effects';
import * as commands from './commands';
import * as models from './shared/models';

Object.assign(window, { R, U, L, t, app: { constants, effects, commands, models } });

// const client = getClient({ username: 'piparkaq' });

const App = ({ aspectRatio }) =>
  <section className={U.cns('app-block', H.getAspectRatio(aspectRatio))}>
    <section className="safe">
      <Clock />

      <Block alignment="bottom right">
        <Ticker messages={effects.tickerMessages} />
      </Block>
    </section>
  </section>;

export default App;
