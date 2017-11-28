import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';

import './App.css';

import TitleCard from './components/TitleCard';
import Clock from './components/Clock';

const prefix = R.curry((pre, x) => U.join('', [pre, x]));

const getAspectRatio =
  U.pipe(U.ifElse(U.isNil,
                  U.always('no-aspect-ratio'),
                  U.pipe(U.replace(':', '-'),
                         prefix('has-aspect-ratio aspect-'))));

const App = ({ aspectRatio }) =>
  <section className={U.cns('App',
                            getAspectRatio(aspectRatio))}>
    <section className="safe">
      <Clock />
      <TitleCard align="bottom right"
                 title="Top kek"
                 subTitle="This is a subtitle" />
    </section>
  </section>;

export default App;
