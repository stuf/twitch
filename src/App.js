import * as React from 'karet';
import * as U from 'karet.util';

import './App.css';

import { getClient } from './api/twitch';
import {
  BlockList,
  Clock,
  ScheduleItem,
  TitleCard
} from './components';

import { getSchedule } from './api/schedule/index';

import * as H from './shared/helpers';

const client = getClient({ username: 'piparkaq' });

const App = ({ aspectRatio }) =>
  <section className={U.cns('App', H.getAspectRatio(aspectRatio))}>
    <section className="safe">
      <Clock align="top left" />

      <BlockList align="bottom right">
        <ul>
          <li>Foo</li>
        </ul>
        {/* `unstyled` could be the default for nested blocks,
            but let's be explicit rather than implicit here */}
        {/* <TitleCard {...{ unstyled: true,
                         title: 'Foo' }} /> */}
        <ScheduleItem {...{ unstyled: true,
                            schedule: getSchedule(new Date(2017, 11, 1, 18, 0, 0)) }} />
      </BlockList>
    </section>
  </section>;

export default App;
