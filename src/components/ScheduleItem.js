import * as React from 'karet';
import * as U from 'karet.util';
import {
  format,
  distanceInWords
} from 'date-fns';

import BaseBlock from './BaseBlock';

import './ScheduleItem.css';

const itemDateFormat = 'HH:mm';

const startTimeFor = U.view('startTime');
const titleFor = U.view('title');
const descriptionFor = U.view('description');

const formatProgramStart = U.lift1Shallow(x => format(x, itemDateFormat));
const formatIsoTime = U.invoker(1, 'toISOString');

//

const ScheduleItem = ({ schedule, className, align }) => {
  return (
    <BaseBlock {...{ align, className: U.cns(className, 'ScheduleItem') }}>
      <section>
        <aside>Next up</aside>
        <header>
          {U.seq(schedule,
                 U.view('programs'),
                 U.take(1),
                 U.mapElems((prog, i) =>
                   <article key={i}>
                     <header>
                       {titleFor(prog)}
                     </header>
                     <time datetime={U.seq(startTimeFor(prog),
                                           formatIsoTime)}>
                       {U.seq(startTimeFor(prog),
                              formatProgramStart)}
                     </time>
                   </article>))}
        </header>
      </section>
    </BaseBlock>
  );
};

export default ScheduleItem;
