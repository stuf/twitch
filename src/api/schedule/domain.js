import * as t from 'tcomb';

export const ProgramType =
  t.enums.of(['programming',
              'games',
              'graphics',
              'other'], 'ProgramType')

export const Program =
  t.struct({ id: t.String,
             title: t.String,
             description: t.maybe(t.String),
             startTime: t.Date,
             endTime: t.Date,
             type: ProgramType },
           { name: 'Program',
             strict: true });

export const Schedule =
  t.struct({ date: t.Date,
             programs: t.maybe(t.list(Program)) },
           { name: 'Schedule',
             strict: true });

export const ScheduleList = t.list(Schedule, 'ScheduleList');
