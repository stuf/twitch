import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';

import './App.css';

import TitleCard from './components/TitleCard';
import ScheduleItem from './components/ScheduleItem';
import Clock from './components/Clock';

import { getSchedule, getSchedules } from './api/schedule/index';

import * as H from './shared/helpers';

const App = ({ aspectRatio }) =>
  <section className={U.cns('App',
                            H.getAspectRatio(aspectRatio))}>
    <section className="safe">
      <Clock />
      {/* Separate this block into something less explicit!

          Do a "block stack" that will get cycled. */}
      {/* <TitleCard align="bottom right"
                 title="Top kek"
                 subTitle="This is a subtitle" /> */}
      <ScheduleItem align="bottom right"
                    schedule={getSchedule(H.mkDate(2017, 11, 30))} />
    </section>
  </section>;

export default App;
