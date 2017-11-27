import * as React from 'karet';
import * as U from 'karet.util';
import { interval } from 'kefir';
import { format } from 'date-fns';

import BaseBlock from './BaseBlock';

const timeTick = () => new Date();

const getTick = time => interval(time, null).toProperty(timeTick);

//

const Clock = ({ tickInterval = 500, timeFormat = 'HH:mm:ss' }) =>
  <BaseBlock>
    {getTick(tickInterval).map(timeTick).map(d => format(d, timeFormat))}
  </BaseBlock>;

export default Clock;
