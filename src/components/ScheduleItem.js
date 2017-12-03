import * as React from 'karet';
import * as U from 'karet.util';

import BaseBlock from './BaseBlock';
import * as H from '../shared/helpers';
import { Schedule as M } from './meta';

import './ScheduleItem.css';

//

// @fixme rename to Schedule and create appropriate 'next up' functionality
const ScheduleItem = ({
  schedule,
  className,
  align,
  unstyled,
  scheduleItem = U.view(['programs', 0], schedule).log('scheduleItem')
}) => {
  return (
    <BaseBlock {...{ align,
                     unstyled,
                     className: U.cns(className, 'ScheduleItem') }}>
      <section>
        <header className="heading-next-up">
          <p>Next up</p>
          <time dateTime={U.seq(M.startTimeFor(scheduleItem),
                                H.formatIsoTime)}>
            {U.seq(M.startTimeFor(scheduleItem),
                    H.formatProgramStart)}
            {' - '}
            {U.seq(M.endTimeFor(scheduleItem),
                    H.formatProgramStart)}
          </time>
        </header>
        <article className="schedule-item">
          {/* This was supposed to be the ScheduleItem.
              You're lying to me wtf. */}
          <header>
            <p>{M.titleFor(scheduleItem)}</p>
          </header>
        </article>
      </section>
    </BaseBlock>
  );
};

export default ScheduleItem;
