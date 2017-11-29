import * as U from 'karet.util';
import * as R from 'ramda';
import {
  constant,
  constantError
} from 'kefir';

import { isEqual } from 'date-fns';

import {
  ScheduleList,
  Schedule,
  Program
} from './domain';

//

// @fixme What about timezones?
const mkDate = R.constructN(3, Date);
const mkDateTime = R.constructN(6, Date);

//

const schedule =
  Schedule({
    date: mkDate(2017, 11, 30),
    programs: [
      Program({ id: 'calmm-coding-101',
                title: 'Coding in Calmm',
                description: 'N/A',
                startTime: mkDateTime(2017, 11, 30, 18, 0, 0),
                endTime: mkDateTime(2017, 11, 30, 20, 0, 0) }),
      Program({ id: 'overwatch-and-chill',
                title: 'Overwatch & Chill',
                description: 'Orisa\'s magical escapades in saltland.',
                startTime: mkDateTime(2017, 11, 30, 20, 0, 0),
                endTime: mkDateTime(2017, 11, 30, 22, 0, 0) })
    ]
  });

export const getSchedules = () => constant(ScheduleList([schedule]));

export const getSchedule = date =>
  U.seq(getSchedules(),
        U.find(s => isEqual(s.date, date)),
        U.when(U.isNil, U.flatMapLatest(constantError({ msg: 'Nothing found' }))),
        U.flatMapLatest(constant));
