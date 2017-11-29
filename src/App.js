import * as React from 'karet';
import * as U from 'karet.util';

import './App.css';

import {
  BlockList,
  Clock,
  ScheduleItem,
  TitleCard
} from './components';

import { getSchedule } from './api/schedule/index';

import * as H from './shared/helpers';

const App = ({ aspectRatio }) =>
  <section className={U.cns('App', H.getAspectRatio(aspectRatio))}>
    <section className="safe">
      <Clock align="top left" />

      <BlockList align="bottom right">
        {/* `unstyled` could be the default for nested blocks,
            but let's be explicit rather than implicit here */}
        <TitleCard {...{ unstyled: true,
                         title: 'Foo' }} />
        <ScheduleItem {...{ unstyled: true,
                            schedule: getSchedule(H.mkDate(2017, 11, 30)) }} />
      </BlockList>
    </section>
  </section>;

export default App;
