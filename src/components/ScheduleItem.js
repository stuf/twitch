import * as React from 'karet';
import * as U from 'karet.util';

import BaseBlock from './BaseBlock';
import * as H from '../shared/helpers';
import { Schedule as M } from './meta';

import './ScheduleItem.css';

//

const ScheduleItem = ({ schedule, className, align, unstyled }) => {
  return (
    <BaseBlock {...{ align,
                     unstyled,
                     className: U.cns(className, 'ScheduleItem') }}>
      <section>
        <header className="heading-next-up">Next up</header>
        {U.seq(schedule,
               U.view('programs'),
               U.take(1),
               U.mapElems((prog, i) =>
                 <article key={i}>
                   <header>
                     {M.titleFor(prog)}
                   </header>
                   <time dateTime={U.seq(M.startTimeFor(prog),
                                         H.formatIsoTime)}>
                     {U.seq(M.startTimeFor(prog),
                            H.formatProgramStart)}
                   </time>
                 </article>))}
      </section>
    </BaseBlock>
  );
};

export default ScheduleItem;
