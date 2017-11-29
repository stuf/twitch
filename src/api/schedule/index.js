import * as U from 'karet.util';
import * as R from 'ramda';
import {
  constant,
  constantError
} from 'kefir';

import {
  isEqual,
  startOfDay
} from 'date-fns';

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

const schedules =
  [
    Schedule({
      date: mkDate(2017, 10, 29),
      programs: [
        Program({ id: 'calmm-coding-test',
                  title: 'Calmm and Streaming Overlay',
                  description: '',
                  startTime: mkDateTime(2017, 10, 29, 18, 0, 0),
                  endTime: mkDateTime(2017, 10, 29, 21, 15, 0),
                  type: 'programming' }),
        Program({ id: 'overwatch-and-chill',
                  title: 'Overwatch and Chill: Never out of Silver',
                  description: '',
                  startTime: mkDateTime(2017, 10, 29, 21, 20, 0),
                  endTime: mkDateTime(2017, 10, 29, 23, 0, 0),
                  type: 'games' })
      ]
    }),
    Schedule({
      date: mkDate(2017, 11, 30),
      programs: [
        Program({ id: 'calmm-coding-101',
                  title: 'Coding in Calmm',
                  description: 'N/A',
                  startTime: mkDateTime(2017, 11, 30, 18, 0, 0),
                  endTime: mkDateTime(2017, 11, 30, 20, 0, 0),
                  type: 'programming' }),
        Program({ id: 'overwatch-and-chill',
                  title: 'Overwatch & Chill',
                  description: 'Orisa\'s magical escapades in saltland.',
                  startTime: mkDateTime(2017, 11, 30, 20, 0, 0),
                  endTime: mkDateTime(2017, 11, 30, 22, 0, 0),
                  type: 'games' })
      ]
    })
  ];

export const getSchedules = () => constant(ScheduleList(schedules));

export const getSchedule = date =>
  U.seq(getSchedules(),
        U.find(s => isEqual(startOfDay(s.date), startOfDay(date))),
        U.when(U.isNil, U.flatMapLatest(constantError({ msg: 'Nothing found' }))),
        U.flatMapLatest(constant));
