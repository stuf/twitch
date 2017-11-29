import * as React from 'karet';
import { interval } from 'kefir';
import { format } from 'date-fns';

import BaseBlock from './BaseBlock';

import './Clock.css';

const timeTick = () => new Date();

const getTick = time => interval(time, null).toProperty(timeTick);

//

const Clock = ({ tickInterval = 500, timeFormat = 'HH:mm:ss', ...props }) =>
  <BaseBlock {...props}>
    {getTick(tickInterval).map(timeTick).map(d => format(d, timeFormat))}
  </BaseBlock>;

export default Clock;
