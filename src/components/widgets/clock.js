import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';
import { constant, interval } from 'kefir';
import * as H from '../../shared/helpers';

const getNow = R.constructN(0, Date);
const timeTick = millis => interval(millis, null).toProperty(getNow);

const Clock = ({ tickInterval = 500 }) =>
  <div className="block align align-left align-top">
    {U.seq(constant(tickInterval),
           U.flatMapLatest(timeTick),
           U.lift1(R.compose(H.asTime, getNow)))}
  </div>;

export default Clock;
