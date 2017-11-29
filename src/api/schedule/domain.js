import * as t from 'tcomb';

export const Program =
  t.struct({ id: t.String,
             title: t.String,
             description: t.maybe(t.String),
             startTime: t.Date,
             endTime: t.Date },
           { name: 'Program',
             strict: true });

export const Schedule =
  t.struct({ date: t.Date,
             programs: t.maybe(t.list(Program)) },
           { name: 'Schedule',
             strict: true });

export const ScheduleList = t.list(Schedule, 'ScheduleList');
